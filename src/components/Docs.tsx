import React from 'react';
import Layout from './Layout';

const Docs: React.FC = () => (
  <Layout title="Documentation - Clok">
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-purple-600 bg-clip-text text-transparent">Documentation</h1>
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur rounded-2xl border border-emerald-400/20 shadow-lg p-8">
          <p className="text-gray-600 dark:text-gray-300">Coming soon: Full documentation for Clok.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Docs; 