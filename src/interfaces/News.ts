export interface NewsItem {
  title: string;
  link: string;
  image: string;
  summary: string;
  id: string;
}

export type FeedItem = {
  title: string;
  link: string;
  pubDate: string;
  author: string;
  content: string;
  contentSnippet: string;
  id: string;
  isoDate: string;
};
