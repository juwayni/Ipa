import fs from 'fs';
import path from 'path';
import http from 'http';
import https from 'https';

const PUBLIC_AUDIO_DIR = path.join(process.cwd(), 'public', 'audio');

if (!fs.existsSync(PUBLIC_AUDIO_DIR)) {
  fs.mkdirSync(PUBLIC_AUDIO_DIR, { recursive: true });
}

// Remove 0-byte files
fs.readdirSync(PUBLIC_AUDIO_DIR).forEach((file) => {
  const filePath = path.join(PUBLIC_AUDIO_DIR, file);
  if (fs.statSync(filePath).size === 0) {
    fs.unlinkSync(filePath);
  }
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;

    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) IPAMaster/1.0 (Educational Linguistics App)'
      }
    };

    client.get(url, options, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status code ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  console.log('Starting offline audio asset bundling check...');

  const tsContent = fs.readFileSync(path.join(process.cwd(), 'src', 'data', 'ipaSymbols.ts'), 'utf-8');

  // Regex to extract objects with id and audioSource
  const objectRegex = /id:\s*['"]([^'"]+)['"][\s\S]*?audioSource:\s*['"]([^'"]+)['"]/g;
  const matches = [...tsContent.matchAll(objectRegex)];

  console.log(`Found ${matches.length} symbol audio mappings in ipaSymbols.ts`);

  let downloadedCount = 0;
  for (const match of matches) {
    const id = match[1];
    const url = match[2];

    if (url && url.startsWith('http')) {
      const filename = `${id}.mp3`;
      const destPath = path.join(PUBLIC_AUDIO_DIR, filename);

      if (fs.existsSync(destPath) && fs.statSync(destPath).size > 100) {
        downloadedCount++;
        continue;
      }

      try {
        console.log(`Downloading audio for ${id} -> ${filename}`);
        await downloadFile(url, destPath);
        downloadedCount++;
        await sleep(300);
      } catch (err) {
        console.warn(`Could not download audio for ${id}:`, err.message);
      }
    }
  }

  console.log(`Prepared ${downloadedCount} audio files in ${PUBLIC_AUDIO_DIR}`);
}

main();
