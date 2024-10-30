import { EmbedBuilder } from 'discord.js';
import { NewsItem } from 'interfaces/News';

const extractSrc = (html: string): string | null => {
  const match = html.match(/<img\s+[^>]*src="([^"]*)"/);
  return match ? match[1] : null;
};

export const embedConstructor = ({ title, link, image, summary }: NewsItem) => {
  return new EmbedBuilder()
    .setAuthor({
      name: 'RPG Site',
      url: 'https://www.rpgsite.net',
      iconURL:
        'https://images.rpgsite.net/image/da49c9a1/134219/boxart/RPG_Site_Logo_Sidebar_Render-2023.webp',
    })
    .setTitle(title || 'No title')
    .setURL(link || 'https://www.rpgsite.net')
    .setDescription(summary || 'No summary')
    .setImage(extractSrc(image || '') || '')
    .setFooter({
      text: 'Date:',
    })
    .setTimestamp();
};
