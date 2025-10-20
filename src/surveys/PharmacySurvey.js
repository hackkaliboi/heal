import React from 'react';
import BaseSurvey from './BaseSurvey';

// Pharmacy survey questions
const pharmacyQuestions = [
    {
        id: 'pharmacy-1',
        question: 'How would you rate the overall challenges your pharmacy faces in serving patients?',
        type: 'rating',
        lowLabel: 'Very Low',
        highLabel: 'Very High'
    },
    {
        id: 'pharmacy-2',
        question: 'Have you experienced significant delays in receiving prescription medications from suppliers?',
        type: 'yes-no'
    },
    {
        id: 'pharmacy-3',
        question: 'What is the most common reason patients cannot afford their prescribed medications?',
        type: 'multiple-choice',
        options: [
            'High copayments',
            'High deductibles',
            'Insurance does not cover the medication',
            'Medication is not available as a generic',
            'Patient prefers brand name over generic'
        ]
    },
    {
        id: 'pharmacy-4',
        question: 'How often do you need to contact prescribers to clarify or resolve prescription issues?',
        type: 'multiple-choice',
        options: [
            'Rarely (less than once a month)',
            'Occasionally (1-3 times per month)',
            'Frequently (1-2 times per week)',
            'Very frequently (several times per week)'
        ]
    },
    {
        id: 'pharmacy-5',
        question: 'How would you rate the impact of insurance prior authorizations on patient care?',
        type: 'rating',
        lowLabel: 'Minimal Impact',
        highLabel: 'Major Negative Impact'
    },
    {
        id: 'pharmacy-6',
        question: 'Do you stock medications that are commonly prescribed but often unavailable from wholesalers?',
        type: 'yes-no'
    },
    {
        id: 'pharmacy-7',
        question: 'What percentage of your prescriptions require some form of insurance intervention?',
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
        id: 'pharmacy-8',
        question: 'Please share any additional challenges or experiences related to medication access that you would like us to know.',
        type: 'text'
    }
];

const PharmacySurvey = () => {
    return (
        <BaseSurvey entity="Pharmacy" questions={pharmacyQuestions} entityPath="pharmacy" />
    );
};

export default PharmacySurvey;