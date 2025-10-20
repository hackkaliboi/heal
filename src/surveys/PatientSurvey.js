import React from 'react';
import BaseSurvey from './BaseSurvey';

// Patient survey questions based on HEAL Patient Questionnaire
const patientQuestions = [
    {
        id: 'patient-1',
        question: 'Age range:',
        type: 'multiple-choice',
        options: [
            'Under 18',
            '18–24',
            '25–34',
            '35–44',
            '45–54',
            '55+'
        ]
    },
    {
        id: 'patient-2',
        question: 'Gender:',
        type: 'multiple-choice',
        options: [
            'Male',
            'Female',
            'Prefer not to say'
        ]
    },
    {
        id: 'patient-3',
        question: 'Country/Region:',
        type: 'text'
    },
    {
        id: 'patient-4',
        question: 'Occupation:',
        type: 'text'
    },
    {
        id: 'patient-5',
        question: 'How often do you visit a hospital or clinic?',
        type: 'multiple-choice',
        options: [
            'Regularly (once a month or more)',
            'Occasionally (a few times a year)',
            'Rarely',
            'Only in emergencies'
        ]
    },
    {
        id: 'patient-6',
        question: 'How far is the nearest hospital or clinic from your home?',
        type: 'multiple-choice',
        options: [
            'Less than 5 km',
            '5–15 km',
            'More than 15 km'
        ]
    },
    {
        id: 'patient-7',
        question: 'What challenges do you face when trying to access healthcare? (Select all that apply)',
        type: 'multiple-choice',
        options: [
            'Long waiting times',
            'Distance to hospitals',
            'Lack of qualified doctors',
            'Poor communication with medical staff',
            'Poor facility conditions',
            'Other'
        ],
        multiple: true
    },
    {
        id: 'patient-8',
        question: 'How satisfied are you with the quality of medical services in your area?',
        type: 'multiple-choice',
        options: [
            'Very satisfied',
            'Satisfied',
            'Neutral',
            'Dissatisfied',
            'Very dissatisfied'
        ]
    },
    {
        id: 'patient-9',
        question: 'Do you have access to a smartphone or computer with internet?',
        type: 'yes-no'
    },
    {
        id: 'patient-10',
        question: 'Have you ever spoken to a doctor online through video or chat?',
        type: 'yes-no'
    },
    {
        id: 'patient-11',
        question: 'If yes, how would you rate your experience?',
        type: 'multiple-choice',
        options: [
            'Excellent',
            'Good',
            'Fair',
            'Poor'
        ],
        conditional: true
    },
    {
        id: 'patient-12',
        question: 'If not, what concerns or challenges do you have about talking to a doctor online? (Select all that apply)',
        type: 'multiple-choice',
        options: [
            'Trust and safety',
            'Internet connection',
            'Difficulty using online apps',
            'Not sure how it works',
            'Other'
        ],
        conditional: true
    },
    {
        id: 'patient-13',
        question: 'What would make you trust an online doctor or health platform more? (Select all that apply)',
        type: 'multiple-choice',
        options: [
            'Verified doctor licenses',
            'Hospital partnerships',
            'Government approval or endorsement',
            'Reviews from other patients',
            'Transparent doctor profiles',
            'Secure and private data protection'
        ],
        multiple: true
    },
    {
        id: 'patient-14',
        question: 'Would you trust a system that connects you to verified doctors globally, while protecting your personal data?',
        type: 'multiple-choice',
        options: [
            'Yes',
            'Maybe',
            'No'
        ]
    },
    {
        id: 'patient-15',
        question: 'How important is it for your medical history to be easily accessible to authorized doctors (with your permission)?',
        type: 'multiple-choice',
        options: [
            'Very important',
            'Somewhat important',
            'Not important'
        ]
    },
    {
        id: 'patient-16',
        question: 'Which of these features would help you most in your healthcare journey? (Select up to 3)',
        type: 'multiple-choice',
        options: [
            'Talking to verified doctors through video or chat',
            'Receiving prescriptions directly to your pharmacy',
            'Storing my medical records securely online',
            'Getting referred easily to a nearby hospital',
            'Receiving quick health advice without long queues',
            '24/7 support from qualified staff'
        ],
        multiple: true
    },
    {
        id: 'patient-17',
        question: 'What would you like a platform like HEAL to improve about today’s healthcare system?',
        type: 'text'
    },
    {
        id: 'patient-18',
        question: 'Would you like to receive updates about HEAL’s development and how it aims to improve access to care?',
        type: 'multiple-choice',
        options: [
            'Yes',
            'No'
        ]
    },
    {
        id: 'patient-19',
        question: 'Any additional comments or suggestions for HEAL?',
        type: 'text'
    }
];

const PatientSurvey = () => {
    return (
        <BaseSurvey entity="Patient" questions={patientQuestions} entityPath="patient" />
    );
};

export default PatientSurvey;