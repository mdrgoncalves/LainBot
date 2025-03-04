import Parser from 'rss-parser';
import type { FeedItem, NewsItem } from 'interfaces/News';

const parser = new Parser();
const feedUrl = 'https://www.rpgsite.net/feed';
let latestNewsId = '';

const haveNewsTag = (id: string): boolean => {
  return id.includes('News');
};

export const fetchLatestNews = async (): Promise<NewsItem | null> => {
  const feed = await parser.parseURL(feedUrl);
  const latestEntry = feed.items[0] as FeedItem;

  console.log('Latest news:', latestEntry.title);

  if (!haveNewsTag(latestEntry.id) || latestEntry.id === latestNewsId) {
    console.error(
      'No news or latest news is the same as the previous one. Skipping...',
    );
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
