# Authentication System

The HEAL Survey Dashboard includes a basic authentication system to protect sensitive survey data.

## Overview

The authentication system is implemented using React Context API and provides:
- Login functionality with username/password
- Session management
- Protected routes for dashboard access
- Logout functionality

## Implementation Details

### Auth Context (`src/authContext.js`)

The authentication context provides:
- `isAuthenticated` - Boolean state indicating if user is logged in
- `user` - User object with username
- `login` - Function to authenticate user
- `logout` - Function to end user session

### Protected Route Component (`src/ProtectedRoute.js`)

This component wraps protected routes and:
- Checks if user is authenticated
- Redirects unauthenticated users to the login page
- Preserves the intended destination for redirect after login

### Login Component (`src/Login.js`)

The login page:
- Provides a form for username/password entry
- Validates credentials
- Redirects to the dashboard on successful login
- Shows demo credentials for testing

## Default Credentials

For demonstration purposes, the system uses:
- **Username:** admin
- **Password:** password

## Security Considerations

This is a basic authentication system for demonstration purposes only. For production use, consider:

1. **Stronger Authentication**
   - Implement proper password hashing
   - Add multi-factor authentication
   - Use OAuth or other industry-standard authentication protocols

2. **Backend Validation**
   - Move authentication logic to a secure backend
   - Never store passwords in plain text
   - Implement proper session management

3. **Additional Security Measures**
   - Add rate limiting for login attempts
   - Implement account lockout after failed attempts
   - Use HTTPS in production
   - Add CSRF protection

## Customization

To customize the authentication system:

1. **Change Credentials**
   - Modify the `login` function in `src/authContext.js`
   - Update the validation logic to match your requirements

2. **Add User Roles**
   - Extend the user object with role information
   - Implement role-based access controls

3. **Integrate with External Systems**
   - Replace the simple validation with API calls to your authentication service
   - Implement JWT or session-based authentication