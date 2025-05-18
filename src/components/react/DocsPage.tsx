import React from 'react';

const DocsPage = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 p-6">
        <nav className="space-y-2">
          <a href="#getting-started" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
            Getting Started
          </a>
          <a href="#time-tracking" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
            Time Tracking
          </a>
          <a href="#projects" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
            Projects
          </a>
          <a href="#reports" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
            Reports
          </a>
          <a href="#team-management" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
            Team Management
          </a>
          <a href="#api-reference" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
            API Reference
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Getting Started */}
          <section id="getting-started" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Getting Started</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Welcome to Clok! This guide will help you get started with our time tracking application.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sign Up</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To get started, visit our sign-up page and create an account. You can use your email or sign up with Google.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Create Your First Project</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                After signing up, you can create your first project. Click the "New Project" button and fill in the project details.
              </p>
            </div>
          </section>

          {/* Time Tracking */}
          <section id="time-tracking" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Time Tracking</h2>
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Starting a Timer</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To start tracking time, select a project and click the "Start Timer" button. The timer will begin counting up.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Stopping a Timer</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                When you're done, click the "Stop Timer" button. You can add notes and categorize the time entry.
              </p>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Projects</h2>
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Creating Projects</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Projects help you organize your time entries. You can create projects for different clients, tasks, or categories.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Managing Projects</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Edit project details, archive projects, or delete them from the project settings page.
              </p>
            </div>
          </section>

          {/* Reports */}
          <section id="reports" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Reports</h2>
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Generating Reports</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Access the Reports section to generate detailed reports of your time entries. Filter by date range, project, or team member.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Exporting Data</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Export your reports in various formats including CSV, PDF, and Excel.
              </p>
            </div>
          </section>

          {/* Team Management */}
          <section id="team-management" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Team Management</h2>
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Adding Team Members</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Invite team members by email. They'll receive an invitation to join your workspace.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Managing Permissions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Set different permission levels for team members to control what they can access and modify.
              </p>
            </div>
          </section>

          {/* API Reference */}
          <section id="api-reference" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">API Reference</h2>
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Authentication</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All API requests require authentication using your API key. You can find your API key in your account settings.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Endpoints</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our API provides endpoints for managing time entries, projects, and team members. Check our API documentation for detailed information.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DocsPage; 