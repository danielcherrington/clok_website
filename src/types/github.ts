export interface Asset {
  id: number;
  name: string;
  browser_download_url: string;
  content_type: string;
  size: number;
  created_at: string;
  updated_at: string;
}

export interface Release {
  id: number;
  name: string;
  tag_name: string;
  published_at: string;
  body: string;
  assets: Asset[];
  html_url: string;
  draft: boolean;
  prerelease: boolean;
} 