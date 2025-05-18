import type { APIRoute } from 'astro';
import Stripe from 'stripe';
import { LicenseGenerator } from '../../../licensing/generator';
import { EmailService } from '../../../services/emailService';
import * as path from 'path';
import { put } from '@vercel/blob';

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

const webhookSecret = import.meta.env.STRIPE_WEBHOOK_SECRET;

// Initialize license generator with private key
const licenseGenerator = new LicenseGenerator(
  path.join(process.cwd(), 'private.pem')
);

// Function to store license in Vercel Blob
async function storeLicenseInBlob(license: string, email: string): Promise<string> {
  const filename = `clok/licenses/${email}-${Date.now()}.json`;
  const { url } = await put(filename, license, {
    access: 'public',
    addRandomSuffix: false,
  });
  return url;
}

export const POST: APIRoute = async ({ request }) => {
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return new Response(
      JSON.stringify({ message: 'No signature found' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  let event: Stripe.Event;

  try {
    const rawBody = await request.text();
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return new Response(
      JSON.stringify({ message: 'Webhook signature verification failed' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        
        // Calculate expiry date (1 year from now)
        const expiryDate = new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
        
        // Generate license
        const licenseData = {
          name: session.customer_details?.name || 'Valued Customer',
          email: session.customer_email!,
          licenseType: 'pro' as const,
          expiry: expiryDate.toISOString(),
          trial: false
        };

        const license = licenseGenerator.generateLicense(licenseData);

        // Store license in Vercel Blob
        const licenseUrl = await storeLicenseInBlob(license, session.customer_email!);

        // Send license email
        await EmailService.sendLicenseEmail(
          session.customer_email!,
          session.customer_details?.name || 'Valued Customer',
          license
        );

        break;
      }
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return new Response(
      JSON.stringify({ received: true }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response(
      JSON.stringify({ message: 'Error processing webhook' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}; 