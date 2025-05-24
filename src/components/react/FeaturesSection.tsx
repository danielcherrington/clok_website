import FeatureCard from './FeatureCard';
import { features } from '../../data/features';

const FeaturesSection = () => {
  // Only show the first 3 features in the section
  const sectionFeatures = features.slice(0, 6);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need to track time effectively
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Powerful features to help you and your team stay on track
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectionFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              showFeatures={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 