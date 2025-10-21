# Supabase Integration

The HEAL Survey application uses Supabase as its backend database for storing survey responses.

## Overview

Supabase is an open-source Firebase alternative that provides:
- Database (PostgreSQL)
- Authentication
- Real-time subscriptions
- Storage
- Edge functions

In this application, we're using Supabase for:
- Storing survey responses
- Retrieving responses for the dashboard

## Setup

### 1. Create a Supabase Account
1. Go to [https://supabase.io](https://supabase.io)
2. Sign up for a free account
3. Create a new project

### 2. Get API Credentials
1. In your Supabase project dashboard, go to "Project Settings"
2. Navigate to "API"
3. Copy your "Project URL" and "anon public" key

### 3. Configure Environment Variables
Create a `.env` file in the project root with:
```
REACT_APP_SUPABASE_URL=your_project_url
REACT_APP_SUPABASE_ANON_KEY=your_anon_key
```

### 4. Create Database Table
Run the following SQL in the Supabase SQL editor:
```sql
CREATE TABLE survey_responses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  survey_type VARCHAR(50),
  responses JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_survey_responses_type ON survey_responses(survey_type);
CREATE INDEX idx_survey_responses_created_at ON survey_responses(created_at);
```

## Implementation

### Supabase Client (`src/supabaseClient.js`)
- Initializes the Supabase client with project credentials
- Exports the client for use throughout the application

### Data Structure
Survey responses are stored in the `survey_responses` table with:
- `id` - Unique identifier (UUID)
- `survey_type` - Type of survey (patient, pharmacy, doctor, hospital)
- `responses` - JSON object containing all question/answer pairs
- `created_at` - Timestamp of submission

### Usage in Components

#### Saving Responses (`src/surveys/BaseSurvey.js`)
- When a survey is completed, responses are saved to Supabase
- Uses the `insert` method to add a new record
- Handles errors gracefully without preventing navigation

#### Retrieving Responses (`src/Dashboard.js`)
- Fetches all survey responses for display
- Supports filtering by survey type
- Orders responses by creation date (newest first)

#### Detailed View (`src/SurveyResponseDetail.js`)
- Retrieves a single response by ID
- Displays all questions and answers

## Security Considerations

### Row Level Security (RLS)
The provided SQL includes basic RLS policies:
- Allows public inserts (for survey submissions)
- Restricts reads to authenticated users only

### Environment Variables
- Credentials are stored in environment variables
- Never committed to version control (`.env` is in `.gitignore`)

### Data Validation
- Client-side validation is implemented
- Consider adding server-side validation for production use

## Customization

### Adding New Fields
To add new fields to the survey responses:
1. Modify the database schema
2. Update the insert query in `BaseSurvey.js`
3. Update the dashboard components to display new fields

### Changing Data Structure
To change how responses are stored:
1. Modify the `responses` field structure
2. Update the save logic in `BaseSurvey.js`
3. Update the display logic in dashboard components

### Adding Authentication
To add user authentication:
1. Enable Supabase Auth in your project
2. Integrate Supabase Auth with the existing auth context
3. Update RLS policies as needed