import Parser from 'rss-parser';

import type { FeedItem, NewsItem } from 'interfaces/News';

const parser = new Parser();
const feedUrl = 'https://www.rpgsite.net/feed';
let latestNewsId: string | null = null;

const haveNewsTag = (id: string): boolean => {
  return id.includes('News');
};

export const fetchLatestNews = async (): Promise<NewsItem | null> => {
  const feed = await parser.parseURL(feedUrl);
  const latestEntry = feed.items[0] as FeedItem;

  if (!haveNewsTag(latestEntry.id) || latestEntry.id === latestNewsId) {
    return null;
  }

  latestNewsId = latestEntry.id;
  console.log(latestNewsId);

  return {
    title: latestEntry.title,
    link: latestEntry.link,
    image: latestEntry.content,
    summary: latestEntry.contentSnippet,
    id: latestEntry.id,
  };
};
