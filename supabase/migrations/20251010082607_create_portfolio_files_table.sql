/*
  # Portfolio Files Management System

  ## Overview
  Creates a comprehensive system for managing uploaded photos and videos in the portfolio,
  including metadata storage and proper security policies.

  ## New Tables
  
  ### `portfolio_files`
  Stores metadata for all uploaded media files (images and videos)
  
  **Columns:**
  - `id` (uuid, primary key) - Unique identifier for each file
  - `filename` (text, not null) - Original filename of the uploaded file
  - `storage_path` (text, not null, unique) - Path to file in Supabase Storage
  - `file_type` (text, not null) - MIME type (e.g., 'image/jpeg', 'video/mp4')
  - `file_size` (bigint, not null) - File size in bytes
  - `category` (text, default 'uncategorized') - Category for organizing files (e.g., 'web-design', 'photography', 'video-production')
  - `description` (text) - Optional description or caption for the file
  - `display_order` (integer, default 0) - Order for displaying in portfolio gallery
  - `is_featured` (boolean, default false) - Whether to feature this file prominently
  - `created_at` (timestamptz, default now()) - When the file was uploaded
  - `updated_at` (timestamptz, default now()) - Last time metadata was updated

  ## Security
  
  ### Row Level Security (RLS)
  - RLS is enabled on `portfolio_files` table
  - Public read access for all files (portfolio is meant to be viewed by everyone)
  - Only authenticated users can insert, update, or delete files (admin control)
  
  ### Policies
  1. **Public Read Access** - Anyone can view portfolio files
  2. **Authenticated Insert** - Only authenticated users can upload files
  3. **Authenticated Update** - Only authenticated users can update file metadata
  4. **Authenticated Delete** - Only authenticated users can delete files

  ## Notes
  - The `storage_path` must be unique to prevent duplicate uploads
  - Files are soft-sorted by `display_order` and then by `created_at`
  - The actual file data is stored in Supabase Storage (bucket: 'portfolio-media')
  - This table only stores metadata and references to storage
*/

-- Create portfolio_files table
CREATE TABLE IF NOT EXISTS portfolio_files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  filename text NOT NULL,
  storage_path text NOT NULL UNIQUE,
  file_type text NOT NULL,
  file_size bigint NOT NULL,
  category text DEFAULT 'uncategorized',
  description text,
  display_order integer DEFAULT 0,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_portfolio_files_category ON portfolio_files(category);
CREATE INDEX IF NOT EXISTS idx_portfolio_files_created_at ON portfolio_files(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_portfolio_files_display_order ON portfolio_files(display_order);
CREATE INDEX IF NOT EXISTS idx_portfolio_files_featured ON portfolio_files(is_featured) WHERE is_featured = true;

-- Enable Row Level Security
ALTER TABLE portfolio_files ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view portfolio files (public read)
CREATE POLICY "Anyone can view portfolio files"
  ON portfolio_files
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policy: Only authenticated users can upload files
CREATE POLICY "Authenticated users can upload files"
  ON portfolio_files
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can update file metadata
CREATE POLICY "Authenticated users can update files"
  ON portfolio_files
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Only authenticated users can delete files
CREATE POLICY "Authenticated users can delete files"
  ON portfolio_files
  FOR DELETE
  TO authenticated
  USING (true);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to call the function before update
DROP TRIGGER IF EXISTS update_portfolio_files_updated_at ON portfolio_files;
CREATE TRIGGER update_portfolio_files_updated_at
  BEFORE UPDATE ON portfolio_files
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();