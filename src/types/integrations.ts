export interface IntegrationField {
  id: string;
  label: string;
  type: 'text' | 'password' | 'url' | 'email';
  required: boolean;
  placeholder?: string;
  default?: string;
  readOnly?: boolean;
}

export interface IntegrationFeatures {
  extractTasks: boolean;
  logTime: boolean;
}

export interface Integration {
  id: string;
  name: string;
  description: string;
  logo: string;
  available: boolean;
  ai?: boolean;
  features: IntegrationFeatures;
} 