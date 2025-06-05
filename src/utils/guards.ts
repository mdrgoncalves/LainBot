import type { FeedItem } from 'interfaces/News';

export const isNews = (id?: string): boolean => !!id && id.includes('News');

export const isValidEntry = (entry: any): entry is FeedItem =>
  isNews(entry.id) &&
  typeof entry.id === 'string' &&
  typeof entry.title === 'string' &&
  typeof entry.link === 'string' &&
  typeof entry.content === 'string' &&
  typeof entry.contentSnippet === 'string';
