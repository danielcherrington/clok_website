import type { APIRoute } from 'astro';
import Stripe from 'stripe';
import { list } from '@vercel/blob';

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

// Function to find the latest license for a given email
async function findLatestLicense(email: string): Promise<string | null> {
  try {
    const { blobs } = await list({ prefix: `clok/licenses/${email}` });
    if (blobs.length === 0) return null;
    
    // Sort by creation date descending and get the latest
    const latestBlob = blobs.sort((a, b) => 
      new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
    )[0];
    
    const response = await fetch(latestBlob.url);
    if (!response.ok) return null;
    
    return await response.text();
  } catch (error) {
    console.error('Error fetching license from blob:', error);
    return null;
  }
}

export const GET: APIRoute = async ({ url }) => {
  try {
    const sessionId = url.searchParams.get('session_id');

    if (!sessionId) {
      return new Response(
        JSON.stringify({ error: 'Session ID is required' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Retrieve the checkout session
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session || session.payment_status !== 'paid') {
      return new Response(
        JSON.stringify({ error: 'Invalid or unpaid session' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Fetch the license from Vercel Blob
    const licenseJson = await findLatestLicense(session.customer_email!);
    
    if (!licenseJson) {
      return new Response(
        JSON.stringify({ error: 'License not found' }),
        {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const license = JSON.parse(licenseJson);

    return new Response(
      JSON.stringify({
        key: license.signature,
        email: license.email,
        purchaseDate: new Date().toISOString(),
        name: license.name,
        licenseType: license.licenseType,
        expiry: license.expiry
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching license:', error);
    return new Response(
      JSON.stringify({ error: 'Error fetching license' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}; 