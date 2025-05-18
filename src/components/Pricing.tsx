import React from 'react';
import Layout from './Layout';

const Pricing: React.FC = () => (
  <Layout title="Pricing - Clok">
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-xl">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-purple-600 bg-clip-text text-transparent">Pricing</h1>
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur rounded-2xl border border-emerald-400/20 shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">Pro Plan</h2>
          <p className="text-4xl font-bold mb-4">$5 <span className="text-lg font-normal">/ month</span></p>
          <ul className="mb-6 text-gray-600 dark:text-gray-300">
            <li>Unlimited time tracking</li>
            <li>All integrations</li>
            <li>Priority support</li>
          </ul>
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-700 to-purple-800 text-white font-semibold shadow-lg border border-emerald-200/80 dark:border-emerald-400/40 hover:opacity-90 transition-all">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Pricing; 