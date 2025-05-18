import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logos = {
  sugarcrm: 'https://www.sugarcrm.com/wp-content/themes/sugarcrm/assets/img/logos/sugarcrm-logo.svg',
  espocrm: 'https://www.espocrm.com/wp-content/themes/espocrm/assets/images/logo.svg',
  citohr: 'https://www.citohr.com/wp-content/uploads/2023/03/citohr-logo.svg',
  trello: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Trello_logo.svg',
  'google-sheets': 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Google_Sheets_2020_Logo.svg',
};

const downloadLogo = (url, filename) => {
  return new Promise((resolve, reject) => {
    const tempFile = path.join(__dirname, '../public/images/integrations', filename + '.tmp');
    const finalFile = path.join(__dirname, '../public/images/integrations', filename);
    const file = fs.createWriteStream(tempFile);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        file.close();
        fs.unlink(tempFile, () => {});
        return reject(new Error(`HTTP status ${response.statusCode} for ${filename}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        fs.rename(tempFile, finalFile, (err) => {
          if (err) {
            fs.unlink(tempFile, () => {});
            if (err.code === 'EACCES' || err.code === 'EPERM') {
              return reject(new Error(`Permission denied when writing ${finalFile}`));
            }
            return reject(err);
          }
          console.log(`Downloaded ${filename}`);
          resolve();
        });
      });
    }).on('error', (err) => {
      file.close();
      fs.unlink(tempFile, () => {});
      if (err.code === 'EACCES' || err.code === 'EPERM') {
        console.error(`Permission denied when writing ${finalFile}`);
      }
      reject(err);
    });
  });
};

const downloadAllLogos = async () => {
  for (const [name, url] of Object.entries(logos)) {
    const logoPath = path.join(__dirname, '../public/images/integrations', `${name}.svg`);
    if (fs.existsSync(logoPath)) {
      console.log(`Skipping ${name}.svg (already exists)`);
      continue;
    }
    if (!url) {
      console.log(`No URL for ${name}, skipping.`);
      continue;
    }
    try {
      await downloadLogo(url, `${name}.svg`);
    } catch (error) {
      console.error(`Failed to download ${name} logo:`, error.message);
    }
  }
};

downloadAllLogos().then(() => {
  console.log('All logos downloaded successfully');
}).catch((error) => {
  console.error('Error downloading logos:', error);
}); 