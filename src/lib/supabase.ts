import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type PortfolioFile = {
  id: string;
  filename: string;
  storage_path: string;
  file_type: string;
  file_size: number;
  category: string;
  description: string | null;
  display_order: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
};
