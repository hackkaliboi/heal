-- Create survey_responses table
CREATE TABLE IF NOT EXISTS survey_responses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  survey_type VARCHAR(50),
  responses JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create an index on survey_type for faster filtering
CREATE INDEX IF NOT EXISTS idx_survey_responses_type ON survey_responses(survey_type);

-- Create an index on created_at for faster sorting
CREATE INDEX IF NOT EXISTS idx_survey_responses_created_at ON survey_responses(created_at);

-- Enable RLS (Row Level Security) for the table
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow public inserts (for survey submissions)
CREATE POLICY "Allow public insert" ON survey_responses
  FOR INSERT WITH CHECK (true);

-- Create a policy to restrict reads to authenticated users only
CREATE POLICY "Restrict reads to authenticated users" ON survey_responses
  FOR SELECT USING (auth.role() = 'authenticated');

-- Grant necessary permissions
GRANT INSERT ON survey_responses TO anon;
GRANT ALL ON survey_responses TO authenticated;