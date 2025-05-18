import React from 'react';
import Layout from './Layout';

const Home: React.FC = () => (
  <Layout title="Clok - Time Tracking Made Simple">
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-purple-600 bg-clip-text text-transparent">Clok</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Effortless time tracking for teams and individuals.</p>
      <a
        href="/releases"
        className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-700 to-purple-800 text-white font-semibold shadow-lg border border-emerald-200/80 dark:border-emerald-400/40 hover:opacity-90 transition-all"
      >
        Download Clok
      </a>
    </section>
  </Layout>
);

export default Home; 