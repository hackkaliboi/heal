import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PatientSurvey from './PatientSurvey';
import PharmacySurvey from './PharmacySurvey';
import DoctorSurvey from './DoctorSurvey';
import HospitalSurvey from './HospitalSurvey';
import SurveySelection from './SurveySelection';
import ThankYou from './ThankYou';

const SurveyRouter = () => {
    return (
        <Routes>
            <Route index element={<SurveySelection />} />
            <Route path="patient" element={<PatientSurvey />} />
            <Route path="pharmacy" element={<PharmacySurvey />} />
            <Route path="doctor" element={<DoctorSurvey />} />
            <Route path="hospital" element={<HospitalSurvey />} />
            <Route path="thank-you" element={<ThankYou />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default SurveyRouter;