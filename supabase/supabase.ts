import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = 'https://nlbkpvzeozymejaxeufn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sYmtwdnplb3p5bWVqYXhldWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0MzA2MzksImV4cCI6MjA3ODAwNjYzOX0.g340iEX7CXZGN-qwitkdZIltp6Taw7P6RDxwhsVHPdE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
