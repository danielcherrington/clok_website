import type { ReactNode } from 'react';
import { TimeTrackingIcon, TaskManagementIcon, ReportsIcon, GoalsIcon, ActivityIcon, SettingsIcon, AIIcon } from '../components/icons/FeatureIcons';
import { AiOutlineRobot } from 'react-icons/ai';
export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
}

export const features: Feature[] = [
  {
    title: "Time Tracking",
    description: "Track time effortlessly with our intuitive interface. Start and stop timers with a single click.",
    icon: TimeTrackingIcon(),
    features: [
      "Automated application tracking",
      "One-click timer start/stop",
      "Automatic time rounding",
      "Idle time detection",
      "Manual time entry",
      "Inactive tracking notifications",
      "Activity grouping by application",
      "Activity history tracking"
    ]
  },
  {
    title: "Task Management",
    description: "Seamlessly integrate and manage tasks from multiple sources. Pull tasks from popular SASS platforms.",
    icon: TaskManagementIcon(),
    features: [
      "Integration with popular SASS platforms",
      "Multi-source time allocation",
      "Advanced task filtering and sorting",
      "Manual time allocation interface",
      "Task creation and assignment",
      "Task progress tracking",
      "Bulk task actions",
      "Task history management"
    ]
  },
  {
    title: "Reports & Analytics",
    description: "Gain comprehensive insights with detailed category breakdowns and productivity analytics.",
    icon: ReportsIcon(),
    features: [
      "Category and application time breakdowns",
      "Goal setting and progress tracking",
      "Productivity metrics and trends",
      "Custom report generation",
      "Activity-based reports",
      "Task-based reports",
      "Export to Google Sheets",
      "Personal productivity insights"
    ]
  },
  {
    title: "Goals & Targets",
    description: "Set and track your productivity goals with our comprehensive goal management system.",
    icon: GoalsIcon(),
    features: [
      "Time-based goal setting",
      "Progress monitoring",
      "Goal notifications",
      "Custom goal periods",
      "Activity-specific goals",
      "Personal goal tracking",
      "Goal achievement analytics",
      "Goal adjustment tools"
    ]
  },
  {
    title: "Activity Management",
    description: "Organize and manage your activities with powerful grouping and categorization tools.",
    icon: ActivityIcon(),
    features: [
      "Activity grouping by application",
      "Window title tracking",
      "Activity selection tools",
      "Activity history view",
      "Category management",
      "Activity filtering",
      "Bulk activity actions",
      "Activity export options"
    ]
  },
  {
    title: "Settings & Customization",
    description: "Customize your experience with powerful settings and configuration options.",
    icon: SettingsIcon(),
    features: [
      "Application categorization",
      "Notification preferences",
      "Group type settings",
      "Theme customization",
      "Idle detection settings",
      "Time rounding rules",
      "Integration configuration",
      "Export preferences"
    ]
  },
  {
    title: "AI-Powered Features",
    description: "Leverage advanced AI to automate and optimize your workflow with intelligent insights and automation.",
    icon: AIIcon(),
    features: [
      "Intelligent time tracking analysis",
      "Automatic task categorization",
      "Smart task assignment",
      "Pattern recognition and insights",
      "AI-powered task recognition",
    ]
  },
]; 