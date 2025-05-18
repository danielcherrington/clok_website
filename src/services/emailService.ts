import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  attachments?: nodemailer.Attachment[];
}

export class EmailService {
  private static transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  public static async sendLicenseEmail(
    customerEmail: string,
    customerName: string,
    licenseKey: string
  ): Promise<void> {
    const emailOptions: EmailOptions = {
      to: customerEmail,
      subject: 'Your Clok License Key',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank you for your purchase!</h2>
          <p>Dear ${customerName},</p>
          <p>Thank you for purchasing Clok. Your license key has been attached to this email as a JSON file.</p>
          <p>To activate your license, please follow these steps:</p>
          <ol>
            <li>Download and install Clok</li>
            <li>Open the application</li>
            <li>Enter your license key when prompted</li>
          </ol>
          <p>If you have any questions, please don't hesitate to contact our support team.</p>
          <p>Best regards,<br>The Clok Team</p>
        </div>
      `,
      attachments: [
        {
          filename: 'clok-license.json',
          content: licenseKey,
          contentType: 'application/json'
        }
      ]
    };

    try {
      console.log('Sending license email to:', customerEmail);
      console.log('Email options:', emailOptions);
      console.log('SMTP host:', process.env.SMTP_HOST);
      console.log('SMTP port:', process.env.SMTP_PORT);
      console.log('SMTP secure:', process.env.SMTP_SECURE);
      console.log('SMTP user:', process.env.SMTP_USER);
      console.log('SMTP password:', process.env.SMTP_PASSWORD);
      console.log('SMTP from:', process.env.SMTP_FROM);
        
      await this.transporter.sendMail({
        from: process.env.SMTP_FROM,
        ...emailOptions,
      });
    } catch (error) {
      console.error('Failed to send license email:', error);
      throw new Error('Failed to send license email');
    }
  }
} 