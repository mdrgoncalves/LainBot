import type { Client, TextChannel } from 'discord.js';
import Parser from 'rss-parser';

import { embedConstructor } from 'utils/embedConstructor';
import { postInChat } from 'utils/postInChat';
import { isValidEntry } from 'utils/guards';
import { readCache, writeCache } from 'utils/cache';

import type { FeedItem } from 'interfaces/News';

const FEED_URL = 'https://www.rpgsite.net/feed';
const DELAY_BETWEEN_REQUESTS = 3 * 60 * 1000; // 3 minutes
const MAX_CACHE_SIZE = 50;

const parser = new Parser();

export const fetchRpgNews = async (
  channel: TextChannel,
  client: Client,
): Promise<void> => {
  try {
    const processedNewsCache = await readCache();
    const processedNews = new Set(processedNewsCache);
    const feed = await parser.parseURL(FEED_URL);

    const newEntries = feed.items.filter(
      (entry): entry is FeedItem =>
        isValidEntry(entry) && !processedNews.has(entry.id),
    );

    for (const entry of newEntries) {
      const embed = embedConstructor({
        id: entry.id,
        title: entry.title,
        link: entry.link,
        image: entry.content,
        summary: entry.contentSnippet,
      });

      await channel.send({ embeds: [embed] });
      processedNews.add(entry.id);

      if (entry.id !== newEntries[newEntries.length - 1].id) {
        await new Promise(resolve =>
          setTimeout(resolve, DELAY_BETWEEN_REQUESTS),
        );
      }
    }

    // Limita o tamanho do cache para os IDs mais recentes
    const processedNewsArrFinal = Array.from(processedNews);
    
    while (processedNewsArrFinal.length > MAX_CACHE_SIZE) {
      processedNewsArrFinal.shift();
    }

    await writeCache(processedNewsArrFinal);
  } catch (error) {
    postInChat({
      client,
      message: `Ocorreu um erro ao buscar as últimas notícias: ${error}`,
    });
  }
};
