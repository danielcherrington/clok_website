import type { APIRoute } from 'astro';

const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN; // Note: No PUBLIC_ prefix
const REPO_OWNER = 'Citosoft';
const REPO_NAME = 'clok';

const headers = {
  'Accept': 'application/vnd.github.v3+json',
  'Authorization': `token ${GITHUB_TOKEN}`
};

export const GET: APIRoute = async ({ url }) => {
  const path = url.searchParams.get('path');
  
  if (!path) {
    return new Response(JSON.stringify({ error: 'Missing path parameter' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}${path}`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('GitHub API error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch from GitHub' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 