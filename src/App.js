import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import SurveyRouter from './surveys/SurveyRouter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/surveys/*" element={<SurveyRouter />} />
      </Routes>
    </Router>
  );
}

export default App;