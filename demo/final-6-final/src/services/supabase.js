import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://mfwasdjpuvjgzkkjlnrx.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1md2FzZGpwdXZqZ3pra2psbnJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3NTMwNjAsImV4cCI6MTk5MzMyOTA2MH0.jCKkCu80pun9MFbANf2_fYGhx-74H3jmBQdkQHyqaUE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
