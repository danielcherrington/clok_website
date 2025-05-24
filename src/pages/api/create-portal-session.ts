import type { APIRoute } from 'astro';
import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const { customerId } = await request.json();

    if (!customerId) {
      return new Response(
        JSON.stringify({ error: 'Customer ID is required' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Create a customer portal session
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${import.meta.env.PUBLIC_SITE_URL}/account`,
    });

    return new Response(
      JSON.stringify({ url: session.url }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error creating portal session:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Error creating portal session'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}; 