import React from 'react';
import BaseSurvey from './BaseSurvey';

// Hospital survey questions
const hospitalQuestions = [
    {
        id: 'hospital-1',
        question: 'How would you rate the financial pressures your hospital faces in providing patient care?',
        type: 'rating',
        lowLabel: 'Very Low',
        highLabel: 'Very High'
    },
    {
        id: 'hospital-2',
        question: 'Do you believe that insurance coverage limitations significantly impact patient outcomes?',
        type: 'yes-no'
    },
    {
        id: 'hospital-3',
        question: 'What is the most significant systemic challenge your hospital faces in delivering care?',
        type: 'multiple-choice',
        options: [
            'Financial constraints',
            'Staffing shortages',
            'Insurance reimbursement delays',
            'Regulatory compliance',
            'Technology limitations',
            'Patient access barriers'
        ]
    },
    {
        id: 'hospital-4',
        question: 'How would you rate the complexity of billing and insurance processes for your hospital?',
        type: 'rating',
        lowLabel: 'Very Simple',
        highLabel: 'Very Complex'
    },
    {
        id: 'hospital-5',
        question: 'What percentage of eligible patients do you believe are unable to access needed services due to financial constraints?',
        type: 'multiple-choice',
        options: [
            'Less than 5%',
            '5-15%',
            '16-30%',
            '31-50%',
            'More than 50%'
        ]
    },
    {
        id: 'hospital-6',
        question: 'Has your hospital had to reduce services or close departments due to financial pressures?',
        type: 'yes-no'
    },
    {
        id: 'hospital-7',
        question: 'How often do insurance denials result in uncompensated care for your hospital?',
        type: 'multiple-choice',
        options: [
            'Rarely',
            'Occasionally',
            'Frequently',
            'Very frequently'
        ]
    },
    {
        id: 'hospital-8',
        question: 'Please share any additional systemic challenges or experiences that you believe are important for improving healthcare access.',
        type: 'text'
    }
];

const HospitalSurvey = () => {
    return (
        <BaseSurvey entity="Hospital" questions={hospitalQuestions} entityPath="hospital" />
    );
};

export default HospitalSurvey;