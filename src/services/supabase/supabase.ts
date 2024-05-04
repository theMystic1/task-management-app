import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zvonrwiajawyhaqvifcz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2b25yd2lhamF3eWhhcXZpZmN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1Mjc1MDcsImV4cCI6MjAzMDEwMzUwN30.6tFL6y-7z8cyJBiLOxNl1VC8fCEqC7tPMxmCykm2y6c";
export const supabase = createClient(supabaseUrl, supabaseKey);
