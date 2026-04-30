import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ?? import.meta.env.VITE_SUPABASE_ANON_KEY;

export const hasSupabaseConfig = Boolean(supabaseUrl && supabaseKey);

let supabaseClient: SupabaseClient | null = null;

export const getSupabaseClient = () => {
  if (!hasSupabaseConfig) {
    throw new Error(
      'As variaveis VITE_SUPABASE_URL e VITE_SUPABASE_PUBLISHABLE_KEY sao obrigatorias.'
    );
  }

  if (!supabaseClient) {
    supabaseClient = createClient(supabaseUrl, supabaseKey);
  }

  return supabaseClient;
};
