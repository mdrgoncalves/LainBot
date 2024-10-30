/*
Return example:
[
    '0',
    {
      title: 'FuRyu will release Crystar PlayStation 5 version in Japan on February 27, 2025',
      link: 'https://www.rpgsite.net/news/16454-furyu-will-release-crystar-playstation-5-version-in-japan-on-february-27-2025',
      pubDate: '2024-10-18T17:51:00.000Z',
      author: 'Kite Stenbuck',
      content: '<img src="https://assets.rpgsite.net/articles/images/000/016/454/original/CrystarPS5-s.png" alt="FuRyu will release Crystar PlayStation 5 version in Japan on February 27, 2025" /> <p>The company did not elaborate on whether there are any carryover features from the original PS4 release, though.</p>',
      contentSnippet: 'The company did not elaborate on whether there are any carryover features from the original PS4 release, though.',
      id: 'tag:www.rpgsite.net,2005:News/16454',
      isoDate: '2024-10-18T17:51:00.000Z'
    }
  ]
    */

export interface NewsItem {
  title: string | undefined;
  link: string | undefined;
  image: string | undefined;
  summary: string | undefined;
  id: string | undefined;
}
