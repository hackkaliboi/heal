import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './authContext';
import ProtectedRoute from './ProtectedRoute';
import LandingPage from './LandingPage';
import SurveyRouter from './surveys/SurveyRouter';
import Dashboard from './Dashboard';
import SurveyResponseDetail from './SurveyResponseDetail';
import Login from './Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/surveys/*" element={<SurveyRouter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/response/:id" element={
            <ProtectedRoute>
              <SurveyResponseDetail />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;