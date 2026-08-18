import fs from 'fs';
import path from 'path';
import http from 'http';
import https from 'https';

const PUBLIC_AUDIO_DIR = path.join(process.cwd(), 'public', 'audio');

if (!fs.existsSync(PUBLIC_AUDIO_DIR)) {
  fs.mkdirSync(PUBLIC_AUDIO_DIR, { recursive: true });
}

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

  // Parse TS data directly using regex to remain standalone in Node
  const tsContent = fs.readFileSync(path.join(process.cwd(), 'src', 'data', 'ipaSymbols.ts'), 'utf-8');

  const idMatches = [...tsContent.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]);
  const audioMatches = [...tsContent.matchAll(/audioSource:\s*'([^']+)'/g)].map(m => m[1]);

  console.log(`Found ${audioMatches.length} audio sources defined in ipaSymbols.ts`);

  let downloadedCount = 0;
  for (let i = 0; i < idMatches.length; i++) {
    const id = idMatches[i];
    const url = audioMatches[i];

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
