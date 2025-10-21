# Project Structure

This document explains the organization of the HEAL Survey application.

## Root Directory

```
heal-survey/
├── docs/                 # Documentation files
├── public/               # Static assets
├── src/                  # Source code
├── supabase/             # Supabase migrations
├── .env                  # Environment variables
├── .env.example          # Example environment variables
├── .gitignore            # Git ignore rules
├── README.md             # Project README
├── package.json          # NPM dependencies and scripts
└── tailwind.config.js    # Tailwind CSS configuration
```

## Source Code Structure (`src/`)

```
src/
├── surveys/              # Survey components
│   ├── BaseSurvey.js     # Base survey component
│   ├── PatientSurvey.js  # Patient survey
│   ├── PharmacySurvey.js # Pharmacy survey
│   ├── DoctorSurvey.js   # Doctor survey
│   ├── HospitalSurvey.js # Hospital survey
│   ├── SurveyRouter.js   # Survey routing
│   ├── SurveySelection.js # Survey selection page
│   └── ThankYou.js       # Thank you page
├── App.js                # Main application component
├── App.css               # Global styles
├── index.js              # Application entry point
├── index.css             # Global CSS
├── LandingPage.js        # Landing page
├── Dashboard.js          # Dashboard for viewing responses
├── SurveyResponseDetail.js # Detailed response view
├── Login.js              # Login page
├── ProtectedRoute.js     # Protected route component
├── authContext.js        # Authentication context
├── supabaseClient.js     # Supabase client initialization
└── setupTests.js         # Test setup
```

## Documentation (`docs/`)

```
docs/
├── AUTHENTICATION.md     # Authentication system documentation
├── DASHBOARD.md          # Dashboard features documentation
├── PROJECT_STRUCTURE.md  # This file
└── SUPABASE.md           # Supabase integration documentation
```

## Key Components

### Survey System
- **BaseSurvey.js**: Core survey functionality with question navigation, response handling, and transitions
- **Entity-specific surveys**: PatientSurvey.js, PharmacySurvey.js, etc. contain entity-specific questions
- **SurveyRouter.js**: Handles routing between different survey types
- **SurveySelection.js**: Landing page for survey selection

### Dashboard System
- **Dashboard.js**: Main dashboard showing response statistics and list of responses
- **SurveyResponseDetail.js**: Detailed view of individual responses
- **Login.js**: Authentication page for dashboard access
- **ProtectedRoute.js**: Component to protect dashboard routes
- **authContext.js**: Authentication state management

### Backend Integration
- **supabaseClient.js**: Supabase client initialization
- **supabase/migrations/**: Database migration scripts

## Styling

The application uses Tailwind CSS for styling:
- Utility-first CSS framework
- Custom animations and transitions
- Responsive design for all screen sizes

## Routing

The application uses React Router for navigation:
- `/` - Landing page
- `/surveys` - Survey selection
- `/surveys/:type` - Entity-specific surveys
- `/surveys/thank-you` - Thank you page
- `/dashboard` - Response dashboard (protected)
- `/dashboard/response/:id` - Detailed response view (protected)
- `/login` - Authentication page

## Data Flow

1. Users select a survey type from the landing page
2. Users complete the survey question by question with smooth transitions
3. Upon completion, responses are saved to Supabase
4. Administrators can view responses through the dashboard after authentication
5. Detailed response views show all questions and answers

## Customization Points

1. **Survey Questions**: Modify entity-specific survey files to change questions
2. **Styling**: Update Tailwind classes or add custom CSS in index.css
3. **Authentication**: Modify authContext.js to change authentication logic
4. **Database**: Update Supabase schema and queries as needed
5. **Routing**: Modify App.js to add or change routes