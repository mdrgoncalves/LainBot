import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getCacheFilePath = (fileName: string): string => {
  return path.resolve(__dirname, `../../cache/${fileName}`);
};

const ensureCacheFile = async (fileName: string): Promise<void> => {
  const filePath = getCacheFilePath(fileName);
  const cacheDir = path.dirname(filePath);

  try {
    await fs.mkdir(cacheDir, { recursive: true });
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, JSON.stringify([]));
  }
};

export const readCache = async (fileName: string): Promise<string[]> => {
  const filePath = getCacheFilePath(fileName);
  await ensureCacheFile(fileName);
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
};

export const writeCache = async <T>(cache: T[], fileName: string): Promise<void> => {
  const filePath = getCacheFilePath(fileName);
  await fs.writeFile(filePath, JSON.stringify(cache, null, 2));
};
