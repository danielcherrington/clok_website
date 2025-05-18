import { app } from "electron";
import * as crypto from "crypto";
import * as fs from "fs";
import * as path from "path";
import Store from "electron-store";

interface License {
  name: string;
  email: string;
  licenseType: "pro" | "basic";
  expiry: string;
  trial: boolean;
  signature: string;
}

interface TrialData {
  firstRun: string;
}

interface Settings {
  ignoredApps: string[];
  simulateNoLicense: boolean;
}

export class LicenseValidator {
  private readonly publicKeyPath: string;
  private readonly licensePath: string;
  private readonly trialPath: string;
  private readonly TRIAL_DAYS = 7;
  private readonly store: Store<Settings>;

  constructor() {
    const userDataPath = app.getPath("userData");
    const isProd = app && app.isPackaged;

    this.store = new Store<Settings>({
      name: "clok-settings",
      defaults: {
        ignoredApps: [],
        simulateNoLicense: false
      }
    });

    // Keep public.pem in resources directory
    if (isProd) {
      switch (process.platform) {
        case "win32":
          this.publicKeyPath = path.join(
            process.resourcesPath,
            "public.pem"
          );
          break;
        case "darwin":
          this.publicKeyPath = path.join(
            process.resourcesPath,
            "public.pem"
          );
          break;
        case "linux":
          this.publicKeyPath = path.join(
            process.resourcesPath,
            "public.pem"
          );
          break;
        default:
          throw new Error(`Unsupported operating system: ${process.platform}`);
      }
    } else {
      this.publicKeyPath = path.join(
        __dirname,
        "..",
        "..",
        "public.pem"
      );
    }

    this.licensePath = path.join(userDataPath, "license.json");
    this.trialPath = path.join(userDataPath, "trial.json");

    console.log("Public key path:", this.publicKeyPath);
    console.log("License path:", this.licensePath);
    console.log("Trial path:", this.trialPath);
  }

  private getSignedString(license: Omit<License, "signature">): string {
    return `name=${license.name}&email=${license.email}&licenseType=${license.licenseType}&expiry=${license.expiry}&trial=${license.trial}`;
  }

  private verifySignature(signedString: string, signature: string): boolean {
    try {
      const publicKey = fs.readFileSync(this.publicKeyPath, "utf8");
      const verify = crypto.createVerify("SHA256");
      verify.update(signedString);
      return verify.verify(publicKey, signature, "base64");
    } catch (error) {
      console.error("Signature verification failed:", error);
      return false;
    }
  }

  private isLicenseExpired(expiryDate: string): boolean {
    return new Date(expiryDate) < new Date();
  }

  private initializeTrial(): void {
    if (!fs.existsSync(this.trialPath)) {
      const trialData: TrialData = {
        firstRun: new Date().toISOString()
      };
      fs.writeFileSync(this.trialPath, JSON.stringify(trialData, null, 2));
    }
  }

  private isTrialValid(): boolean {
    try {
      const trialData: TrialData = JSON.parse(
        fs.readFileSync(this.trialPath, "utf8")
      );
      const firstRun = new Date(trialData.firstRun);
      const now = new Date();
      const daysDiff =
        (now.getTime() - firstRun.getTime()) / (1000 * 60 * 60 * 24);
      return daysDiff <= this.TRIAL_DAYS;
    } catch {
      return false;
    }
  }

  public validateLicense(): {
    isValid: boolean;
    isPro: boolean;
    isTrial: boolean;
    name?: string;
    email?: string;
    licenseType?: "pro" | "basic";
    expiry?: string;
  } {
    // Check for simulation mode
    if (this.store.get("simulateNoLicense")) {
      console.log("Simulating no license mode");
      return {
        isValid: false,
        isPro: false,
        isTrial: false
      };
    }

    this.initializeTrial();

    try {
      if (!fs.existsSync(this.licensePath)) {
        console.log("No license file found, returning trial status");
        const trialData: TrialData = JSON.parse(
          fs.readFileSync(this.trialPath, "utf8")
        );
        const firstRun = new Date(trialData.firstRun);
        const trialExpiry = new Date(
          firstRun.getTime() + this.TRIAL_DAYS * 24 * 60 * 60 * 1000
        );

        return {
          isValid: this.isTrialValid(),
          isPro: false,
          isTrial: true,
          expiry: trialExpiry.toISOString()
        };
      }

      const license: License = JSON.parse(
        fs.readFileSync(this.licensePath, "utf8")
      );
      console.log("Raw license data:", license);
      const signedString = this.getSignedString(license);

      const isValid =
        this.verifySignature(signedString, license.signature) &&
        !this.isLicenseExpired(license.expiry);

      const result = {
        isValid,
        isPro: isValid && license.licenseType === "pro",
        isTrial: false,
        name: license.name,
        email: license.email,
        licenseType: license.licenseType,
        expiry: license.expiry
      };
      console.log("Validated license result:", result);
      return result;
    } catch (error) {
      console.error("License validation failed:", error);
      const trialData: TrialData = JSON.parse(
        fs.readFileSync(this.trialPath, "utf8")
      );
      const firstRun = new Date(trialData.firstRun);
      const trialExpiry = new Date(
        firstRun.getTime() + this.TRIAL_DAYS * 24 * 60 * 60 * 1000
      );

      return {
        isValid: this.isTrialValid(),
        isPro: false,
        isTrial: true,
        expiry: trialExpiry.toISOString()
      };
    }
  }

  public async installLicense(licensePath: string): Promise<boolean> {
    try {
      console.log("Installing license from:", licensePath);
      const licenseContent = fs.readFileSync(licensePath, "utf8");
      console.log("License content:", licenseContent);
      const license: License = JSON.parse(licenseContent);
      console.log("Parsed license:", license);

      // Validate before installing
      const signedString = this.getSignedString(license);
      console.log("Signed string:", signedString);
      const isValid =
        this.verifySignature(signedString, license.signature) &&
        !this.isLicenseExpired(license.expiry);
      console.log("License validation result:", {
        isValid,
        signedString,
        expiry: license.expiry
      });

      if (!isValid) {
        console.log("License validation failed");
        return false;
      }

      console.log("Writing license to:", this.licensePath);
      fs.writeFileSync(this.licensePath, licenseContent);
      console.log("License installed successfully");
      return true;
    } catch (error) {
      console.error("License installation failed:", error);
      return false;
    }
  }

  public removeLicense(): boolean {
    try {
      if (fs.existsSync(this.licensePath)) {
        fs.unlinkSync(this.licensePath);
        console.log("License removed successfully");
        return true;
      }
      console.log("No license file found to remove");
      return true;
    } catch (error) {
      console.error("Failed to remove license:", error);
      return false;
    }
  }
}
