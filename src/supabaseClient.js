import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from environment variables
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Validate that we have the required credentials
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials. Please check your .env file.');
  console.error('Required variables: REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY');
}

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
