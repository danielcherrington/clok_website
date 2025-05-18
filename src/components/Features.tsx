import React from 'react';
import Layout from './Layout';

const Features: React.FC = () => (
  <Layout title="Features - Clok">
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-purple-600 bg-clip-text text-transparent">Features</h1>
        <ul className="space-y-8">
          <li>
            <h2 className="text-2xl font-semibold mb-2">Time Tracking</h2>
            <p className="text-gray-600 dark:text-gray-300">Track your work with a single click, switch tasks instantly, and never lose a minute.</p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2">Task Management</h2>
            <p className="text-gray-600 dark:text-gray-300">Organize your work, set priorities, and stay focused with simple task lists.</p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2">Reports & Analytics</h2>
            <p className="text-gray-600 dark:text-gray-300">Visualize your productivity with beautiful charts and exportable reports.</p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2">Integrations</h2>
            <p className="text-gray-600 dark:text-gray-300">Connect with your favorite tools like Google Sheets, EspoCRM, and more.</p>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default Features; 