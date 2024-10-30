import { Client, TextChannel } from 'discord.js';
import { fetchLatestNews } from '../services/newsService';
import { embedConstructor } from './../utils/embedConstructor';
import { generalChat } from './../utils/discord';

export default (client: Client): void => {
  client.on('ready', async () => {
    const channel = generalChat(client) as TextChannel;

    setInterval(async () => {
      const news = await fetchLatestNews();
      console.log('News:', news);
      if (!news) return;

      const embed = embedConstructor(news);
      channel.send({ embeds: [embed] });
    }, 60000);
  });
};
