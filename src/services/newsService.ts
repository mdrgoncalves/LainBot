import Parser from 'rss-parser';

import type { NewsItem } from 'interfaces/News';

const parser = new Parser();
const feedUrl = 'https://www.rpgsite.net/feed';
let latestNewsId: string | null = null;

export const fetchLatestNews = async (): Promise<NewsItem | null> => {
  const feed = await parser.parseURL(feedUrl);
  const latestEntry = feed.items[0];

  if (latestEntry.id === latestNewsId) {
    return null; 
  }

  latestNewsId = latestEntry.id;

  return {
    title: latestEntry.title,
    link: latestEntry.link,
    image: latestEntry.content,
    summary: latestEntry.contentSnippet,
    id: latestEntry.id,
  };
};
