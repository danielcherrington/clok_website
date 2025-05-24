import type { Integration } from '../types/integrations';

// Placeholder classes for the connectors
class SugarCRMConnector {}
class EspoCRMConnector {}
class CitoHRConnector {}
class TrelloConnector {}
class GoogleSheetsConnector {}

export const connectors: Integration[] = [
  {
    id: 'sugarcrm',
    name: 'SugarCRM',
    description: 'Seamlessly sync your SugarCRM tasks and time entries with Clok. Automatically track time spent on CRM activities and manage your customer interactions in one place.',
    logo: 'sugarcrm.png',
    available: true,
    features: {
      extractTasks: true,
      logTime: true
    }
  },
  /*{
    id: 'espocrm',
    name: 'EspoCRM',
    description: 'Integrate your EspoCRM workflows with Clok. Track time spent on customer cases, opportunities, and meetings while maintaining your CRM data in sync.',
    logo: 'espocrm.svg',
    available: false,
    features: {
      extractTasks: true,
      logTime: true
    }
  },
  {
    id: 'citohr',
    name: 'CitoHR',
    description: 'Connect your HR processes with time tracking. Automatically log time spent on employee management, recruitment, and HR administrative tasks.',
    logo: 'cito.png',
    available: false,
    features: {
      extractTasks: true,
      logTime: true
    }
  },*/
  {
    id: 'trello',
    name: 'Trello',
    description: 'Transform your Trello boards into time-tracked projects. Monitor time spent on cards and lists while maintaining your agile workflow.',
    logo: 'trello.webp',
    available: true,
    features: {
      extractTasks: true,
      logTime: false
    }
  },
  {
    id: 'asana',
    name: 'Asana',
    description: "Bridge your Asana project management with time tracking. Track time spent on tasks and projects while keeping your team's workflow organized.",
    logo: 'asana.svg',
    available: true,
    features: {
      extractTasks: true,
      logTime: false
    }
  },
  {
    id: 'jira',
    name: 'Jira',
    description: 'Enhance your Jira workflow with precise time tracking. Log time spent on issues, sprints, and epics while maintaining your agile development process.',
    logo: 'jira.svg',
    available: true,
    features: {
      extractTasks: true,
      logTime: true
    }
  },
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    description: 'Export your time entries directly to Google Sheets. Create custom reports and analyze your time tracking data with powerful spreadsheet tools.',
    logo: 'google-sheets.png',
    available: true,
    features: {
      extractTasks: false,
      logTime: true
    }
  },
  {
    id: 'monday',
    name: 'Monday.com',
    description: "Sync your Monday.com projects with time tracking. Monitor time spent on tasks and projects while maintaining your team's workflow and productivity.",
    logo: 'monday.svg',
    available: true,
    features: {
      extractTasks: true,
      logTime: true
    }
  },
  {
    id: 'gmail',
    name: 'Gmail',
    description: 'Connect your Gmail account to Clok. Automatically detect emails that are related to tasks and log time spent on them.',
    logo: 'gmail.svg',
    available: true,
    ai: true,
    features: {
      extractTasks: true,
      logTime: false
    }
  },
]; 