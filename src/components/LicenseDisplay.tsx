import { useState, useEffect } from 'react';

interface LicenseData {
  key: string;
  email: string;
  purchaseDate: string;
  name: string;
  licenseType: string;
  expiry: string;
}

interface StoredData {
  sessionId: string;
  email: string;
}

const MAX_ATTEMPTS = 30; // 5 minutes total (30 attempts * 10 seconds)
const POLL_INTERVAL = 10000; // 10 seconds
const STORAGE_KEY = 'clok_license_data';

const LicenseDisplay = () => {
  const [license, setLicense] = useState<LicenseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);

  const storeUserData = (sessionId: string, email: string) => {
    const data: StoredData = { sessionId, email };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const handleDownloadLicense = () => {
    if (!license) return;
    
    const licenseData = JSON.stringify(license, null, 2);
    const blob = new Blob([licenseData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `clok-license-${license.key}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const fetchLicense = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const sessionId = urlParams.get('session_id');

        if (!sessionId) {
          throw new Error('No session ID found');
        }

        const response = await fetch(`/api/get-license?session_id=${sessionId}`);
        const data = await response.json();

        if (!response.ok) {
          if (response.status === 404 && attempts < MAX_ATTEMPTS) {
            // License not found yet, continue polling
            setAttempts(prev => prev + 1);
            return;
          }
          throw new Error(data.error || 'Failed to fetch license');
        }

        setLicense(data);
        // Store session ID and email in local storage
        storeUserData(sessionId, data.email);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load license');
        setLoading(false);
      }
    };

    const pollInterval = setInterval(() => {
      if (attempts >= MAX_ATTEMPTS) {
        clearInterval(pollInterval);
        setError('License generation is taking longer than expected. Please check your email for your license details.');
        setLoading(false);
        return;
      }
      fetchLicense();
    }, POLL_INTERVAL);

    // Initial fetch
    fetchLicense();

    return () => clearInterval(pollInterval);
  }, [attempts]);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          {attempts === 0 
            ? 'Loading your license information...' 
            : `Generating your license... (Attempt ${attempts}/${MAX_ATTEMPTS})`}
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          This may take a few moments. Please wait while we process your purchase.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
        <p className="font-medium">Error</p>
        <p className="mt-2">{error}</p>
        <p className="mt-4 text-sm text-red-500 dark:text-red-300">
          If you've already received your license via email, you can use that instead.
          Otherwise, please contact support if this issue persists.
        </p>
      </div>
    );
  }

  if (!license) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">License Key</h3>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Registered Email</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{license.email}</p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Purchase Date</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {new Date(license.purchaseDate).toLocaleDateString()}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">License Type</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300 capitalize">{license.licenseType}</p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Expiry Date</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {new Date(license.expiry).toLocaleDateString()}
          </p>
        </div>

        <button
          onClick={handleDownloadLicense}
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
          aria-label="Download license as JSON"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download License
        </button>
      </div>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h4 className="font-medium text-blue-900 dark:text-blue-100">Next Steps</h4>
        <ol className="mt-2 list-decimal list-inside space-y-2 text-blue-800 dark:text-blue-200">
          <li>Download Clok from our website</li>
          <li>Launch Clok and enter your license key when prompted</li>
          <li>Enjoy using Clok!</li>
        </ol>
      </div>
    </div>
  );
};

export default LicenseDisplay; 