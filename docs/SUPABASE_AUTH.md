# Supabase Authentication Setup

This document explains how to set up proper authentication for the dashboard using Supabase Auth.

## Overview

The current authentication system uses a simple hardcoded check in `src/authContext.js`. For production use, you should replace this with Supabase Authentication.

## Setting up Supabase Authentication

### 1. Enable Supabase Auth

1. Go to your Supabase project dashboard
2. Navigate to "Authentication" in the left sidebar
3. Go to "Settings" and configure your auth settings as needed

### 2. Create an Admin User

1. In the Supabase dashboard, go to "Authentication" > "Users"
2. Click "Add user" and create an admin user with:
   - Email: admin@yourdomain.com (or any email you prefer)
   - Password: A strong password
   - User metadata: {"role": "admin"}

### 3. Update the Auth Context

Replace the content of `src/authContext.js` with:

```javascript
import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from './supabaseClient';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Check if user has admin role
        const isAdmin = user.user_metadata?.role === 'admin';
        if (isAdmin) {
          setIsAuthenticated(true);
          setUser(user);
        }
      }
      setLoading(false);
    };

    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const isAdmin = session.user.user_metadata?.role === 'admin';
        if (isAdmin) {
          setIsAuthenticated(true);
          setUser(session.user);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Check if user has admin role
      const isAdmin = data.user.user_metadata?.role === 'admin';
      if (isAdmin) {
        setIsAuthenticated(true);
        setUser(data.user);
        return { success: true };
      } else {
        // Sign out if not admin
        await supabase.auth.signOut();
        return { success: false, error: 'Unauthorized access' };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
```

### 4. Update the Login Component

Update `src/Login.js` to use the new authentication method:

```javascript
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './authContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Please enter both email and password');
      setLoading(false);
      return;
    }

    const result = await login(email, password);
    if (result.success) {
      navigate(from, { replace: true });
    } else {
      setError(result.error || 'Invalid email or password');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">H</span>
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your dashboard
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your credentials to access the survey dashboard
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
```

## Security Considerations

1. **Role-Based Access Control**: The example above shows how to check for an admin role in user metadata
2. **Strong Passwords**: Ensure admin users use strong passwords
3. **Two-Factor Authentication**: Enable 2FA for admin accounts in Supabase
4. **Session Management**: Supabase handles session management automatically
5. **Rate Limiting**: Supabase provides built-in rate limiting for authentication

## Customization

You can customize the authentication flow further by:

1. Adding more user roles
2. Implementing password reset functionality
3. Adding email verification
4. Integrating with third-party authentication providers (Google, GitHub, etc.)