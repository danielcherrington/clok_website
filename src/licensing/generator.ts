import * as crypto from 'crypto';
import * as fs from 'fs';

interface LicenseData {
  name: string;
  email: string;
  licenseType: 'pro' | 'basic';
  expiry: string;
  trial: boolean;
}

export class LicenseGenerator {
  private readonly privateKeyPath: string;

  constructor(privateKeyPath: string) {
    this.privateKeyPath = privateKeyPath;
  }

  private getSignedString(data: LicenseData): string {
    return `name=${data.name}&email=${data.email}&licenseType=${data.licenseType}&expiry=${data.expiry}&trial=${data.trial}`;
  }

  public generateLicense(data: LicenseData): string {
    try {
      const privateKey = fs.readFileSync(this.privateKeyPath, 'utf8');
      const signedString = this.getSignedString(data);
      
      const sign = crypto.createSign('SHA256');
      sign.update(signedString);
      sign.end();

      const signature = sign.sign(privateKey, 'base64');

      const license = {
        ...data,
        signature
      };

      return JSON.stringify(license, null, 2);
    } catch (error) {
      console.error('License generation failed:', error);
      throw new Error('Failed to generate license');
    }
  }

  public static generateKeyPair(): { publicKey: string; privateKey: string } {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
      }
    });

    return { publicKey, privateKey };
  }
} 