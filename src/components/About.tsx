import React from 'react';
import Layout from './Layout';

const About: React.FC = () => (
  <Layout title="About - Clok">
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-purple-600 bg-clip-text text-transparent">About Clok</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Clok is on a mission to make time tracking effortless, transparent, and empowering for everyone.
        </p>
        <ul className="space-y-4 mb-8">
          <li>
            <strong>Our Values:</strong> Simplicity, privacy, and user empowerment.
          </li>
          <li>
            <strong>Our Mission:</strong> Help teams and individuals reclaim their time and focus on what matters.
          </li>
        </ul>
        <a
          href="/releases"
          className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-700 to-purple-800 text-white font-semibold shadow-lg border border-emerald-200/80 dark:border-emerald-400/40 hover:opacity-90 transition-all"
        >
          Download Clok
        </a>
      </div>
    </section>
  </Layout>
);

export default About; 