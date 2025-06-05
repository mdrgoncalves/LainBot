import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

// Corrige __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CACHE_FILE = path.resolve(
  __dirname,
  '../../cache/processed_articles.json',
);

const ensureCacheFile = async (): Promise<void> => {
  const cacheDir = path.dirname(CACHE_FILE);

  try {
    await fs.mkdir(cacheDir, { recursive: true });
    await fs.access(CACHE_FILE);
  } catch {
    await fs.writeFile(CACHE_FILE, JSON.stringify([]));
  }
};

export const readCache = async (): Promise<string[]> => {
  await ensureCacheFile();
  const data = await fs.readFile(CACHE_FILE, 'utf-8');
  return JSON.parse(data);
};

export const writeCache = async (cache: string[]): Promise<void> => {
  await fs.writeFile(CACHE_FILE, JSON.stringify(cache, null, 2));
};
