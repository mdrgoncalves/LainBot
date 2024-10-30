import Parser from 'rss-parser';

import type { NewsItem } from 'interfaces/News';

const parser = new Parser();
const feedUrl = 'https://www.rpgsite.net/feed';
let latestNewsId: string | null = null;

const haveNewsTag = (id: string): boolean => {
  const tagPattern = /,\d+:(.*?)\//;
  const match = id.match(tagPattern);
  return match !== null;
};

export const fetchLatestNews = async (): Promise<NewsItem | null> => {
  const feed = await parser.parseURL(feedUrl);
  const latestEntry = feed.items[0];

  if (!haveNewsTag(latestEntry.id) 
      || latestEntry.id === latestNewsId) null;

  latestNewsId = latestEntry.id;

  return {
    title: latestEntry.title,
    link: latestEntry.link,
    image: latestEntry.content,
    summary: latestEntry.contentSnippet,
    id: latestEntry.id,
  };
};
