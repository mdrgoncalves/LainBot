import { readCache, writeCache } from 'utils/cache';
import Parser from 'rss-parser';

import { embedConstructor } from 'utils/embedConstructor';
import { postInChat } from 'utils/postInChat';
import { isValidEntry } from 'utils/guards';

import type { Client, TextChannel } from 'discord.js';
import type { FeedItem } from 'interfaces/News';

const FEED_URL = 'https://www.rpgsite.net/feed';
const DELAY_BETWEEN_REQUESTS = 3 * 60 * 1000; // 3 minutes

export const fetchRpgNews = async (
  channel: TextChannel,
  client: Client,
): Promise<void> => {
  try {
    const processedNews = await readCache();

    const parser = new Parser();
    const feed = await parser.parseURL(FEED_URL);

    const newEntries = feed.items.filter(
      (entry): entry is FeedItem =>
        isValidEntry(entry) && !processedNews.includes(entry.id),
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
      processedNews.push(entry.id);
      writeCache(processedNews);

      if (entry.id !== newEntries[newEntries.length - 1].id) {
        await new Promise(resolve =>
          setTimeout(resolve, DELAY_BETWEEN_REQUESTS),
        );
      }
    }
  } catch (error) {
    postInChat({
      client,
      message: `Ocorreu um erro ao buscar as últimas notícias: ${error}`,
    });
  }
};
