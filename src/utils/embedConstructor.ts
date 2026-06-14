import { EmbedBuilder } from 'discord.js';
import { NewsItem } from '../interfaces/News.js';
import { normalizeImageUrl } from './normalizeImageUrl.js';


export const embedConstructor = ({ title, link, image, summary }: NewsItem) => {
  const imageUrl = normalizeImageUrl(image);

  const builder = new EmbedBuilder()
    .setAuthor({
      name: 'RPG Site',
      url: 'https://www.rpgsite.net',
      iconURL:
        'https://images.rpgsite.net/image/da49c9a1/134219/boxart/RPG_Site_Logo_Sidebar_Render-2023.webp',
    })
    .setTitle(title || 'No title')
    .setURL(link || 'https://www.rpgsite.net')
    .setDescription(summary || 'No summary')
    .setTimestamp();

  if (imageUrl) builder.setImage(imageUrl);

  return builder;
};
