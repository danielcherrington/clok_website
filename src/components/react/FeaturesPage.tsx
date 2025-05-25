import React from 'react';
import { features } from '../../data/features';
import FeatureCard from './FeatureCard';

const FeaturesPage = () => {
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
              showFeatures={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage; 