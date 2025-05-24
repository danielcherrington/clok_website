import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  features,
  icon,
}) => {
  return (
    <div className="flex flex-col h-full p-6 rounded-2xl border border-gray-200/40 dark:border-gray-700/40 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        {description}
      </p>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FeaturesPage = () => {
  const features = [
    {
      title: "Time Tracking",
      description: "Track time effortlessly with our intuitive interface. Start and stop timers with a single click.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        "Automated application tracking",
        "One-click timer start/stop",
        "Automatic time rounding",
        "Idle time detection",
        "Manual time entry"
      ]
    },
    {
      title: "Task Management",
      description: "Seamlessly integrate and manage tasks from multiple sources. Pull tasks from popular SASS platforms.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      features: [
        "Integration with popular SASS platforms",
        "Multi-source time allocation",
        "Advanced task filtering and sorting",
        "Manual time allocation interface"
      ]
    },
    {
      title: "Reports & Analytics",
      description: "Gain comprehensive insights with detailed category breakdowns and productivity analytics.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: [
        "Category and application time breakdowns",
        "Goal setting and progress tracking",
        "Productivity metrics and trends",
        "Custom report generation"
      ]
    },
    {
      title: "AI-Powered Features",
      description: "Leverage advanced AI to automate and optimize your workflow with intelligent insights and automation.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Intelligent time tracking analysis",
        "Automatic task categorization",
        "Smart task assignment",
        "Pattern recognition and insights",
        "AI-powered task recognition",
      ]
    },
    {
      title: "Integrations",
      description: "Connect Clok with your favorite tools and services for seamless workflow integration.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      features: [
        "SugarCRM integration",
        "Monday.com integration",
        "Google Sheets integration",
        "Jira integration",
        "Trello integration",
        "Asana integration",
        "Gmail integration",
      ]
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12 pb-6 border-b border-gray-200 dark:border-gray-800">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-emerald-500 to-purple-600 bg-clip-text text-transparent">
            Powerful Features for Modern Teams
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to track time, manage tasks, and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage; 