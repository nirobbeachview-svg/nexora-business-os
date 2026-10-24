import { createClient } from '@supabase/supabase-js';

// These are public browser-client settings. Never place service-role or secret keys here.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://pzooswjuailczuhfcymq.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_Ooe8eFD6CMvEPxfGvJyndg_amLw7Bk3';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});
