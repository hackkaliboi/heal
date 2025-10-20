import React from 'react';
import BaseSurvey from './BaseSurvey';

// Doctor survey questions
const doctorQuestions = [
    {
        id: 'doctor-1',
        question: 'How would you rate the administrative burden associated with patient care in your practice?',
        type: 'rating',
        lowLabel: 'Very Low',
        highLabel: 'Very High'
    },
    {
        id: 'doctor-2',
        question: 'Do you feel that insurance prior authorizations negatively impact patient care?',
        type: 'yes-no'
    },
    {
        id: 'doctor-3',
        question: 'What is the primary challenge you face when trying to provide timely care to your patients?',
        type: 'multiple-choice',
        options: [
            'Prior authorizations',
            'Insurance coverage limitations',
            'Patient financial constraints',
            'Limited appointment availability',
            'Specialist referral delays',
            'Other'
        ]
    },
    {
        id: 'doctor-4',
        question: 'How often do you need to spend time on non-clinical tasks during a typical workday?',
        type: 'multiple-choice',
        options: [
            'Less than 1 hour',
            '1-2 hours',
            '2-4 hours',
            '4-6 hours',
            'More than 6 hours'
        ]
    },
    {
        id: 'doctor-5',
        question: 'How would you rate the ease of accessing specialist care for your patients?',
        type: 'rating',
        lowLabel: 'Very Difficult',
        highLabel: 'Very Easy'
    },
    {
        id: 'doctor-6',
        question: 'Have you had to limit the number of new patients due to capacity constraints?',
        type: 'yes-no'
    },
    {
        id: 'doctor-7',
        question: 'What percentage of your patients do you believe have difficulty affording their prescribed treatments?',
        type: 'multiple-choice',
        options: [
            'Less than 10%',
            '10-25%',
            '26-50%',
            '51-75%',
            'More than 75%'
        ]
    },
    {
        id: 'doctor-8',
        question: 'Please share any additional insights about barriers to patient care that you would like us to know.',
        type: 'text'
    }
];

const DoctorSurvey = () => {
    return (
        <BaseSurvey entity="Doctor" questions={doctorQuestions} entityPath="doctor" />
    );
};

export default DoctorSurvey;