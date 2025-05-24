import React from 'react';
import type { Feature } from '../../data/features';

interface FeatureCardProps extends Feature {
  showFeatures?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  features,
  showFeatures = false
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
      {showFeatures && features && (
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
      )}
    </div>
  );
};

export default FeatureCard; 