# Dashboard Documentation

The HEAL Survey Dashboard provides administrators and researchers with a comprehensive view of all survey responses collected through the platform.

## Accessing the Dashboard

The dashboard can be accessed at `/dashboard` route in the application. No authentication is currently implemented, but in a production environment, you would want to add authentication to protect sensitive data.

## Features

### 1. Overview Statistics
The dashboard homepage displays key metrics:
- Total number of responses
- Breakdown by survey type (Patient, Pharmacy, Doctor, Hospital)
- Quick visual indicators for each category

### 2. Response Filtering
You can filter responses by survey type using the dropdown filter:
- All Surveys (default)
- Patient Surveys
- Pharmacy Surveys
- Doctor Surveys
- Hospital Surveys

### 3. Response List
The main table displays:
- Survey type with visual indicators
- Submission date and time
- Number of questions answered
- View Details action button

### 4. Detailed Response View
Clicking "View Details" on any response takes you to a detailed view that shows:
- All questions and answers from the survey
- Submission timestamp
- Survey type
- Response ID

## Data Structure

Responses are stored in Supabase with the following structure:
- `id`: Unique identifier (UUID)
- `survey_type`: Type of survey (patient, pharmacy, doctor, hospital)
- `responses`: JSON object containing all question/answer pairs
- `created_at`: Timestamp of submission

## Security Considerations

For production use, consider implementing:
1. Authentication for dashboard access
2. Role-based access controls
3. Data encryption for sensitive responses
4. Audit logging for dashboard access
5. Rate limiting for API requests

## Customization

The dashboard can be customized by modifying:
- `src/Dashboard.js` - Main dashboard component
- `src/SurveyResponseDetail.js` - Detailed response view
- Styling through Tailwind CSS classes