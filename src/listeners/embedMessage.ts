import { Client, TextChannel } from 'discord.js';
import { fetchLatestNews } from '../services/newsService';
import { embedConstructor } from './../utils/embedConstructor';
import { getChannel } from './../utils/discord';

const FETCH_INTERVAL_IN_HOURS = 1;
const FETCH_INTERVAL_IN_MS = FETCH_INTERVAL_IN_HOURS * 60 * 1000;
const NEWS_CHANNEL_ID = '1301243215088717974';

export default (client: Client): void => {
  client.on('ready', async () => {
    const channel = getChannel({
      client,
      channelId: NEWS_CHANNEL_ID,
    }) as TextChannel;

    setInterval(async () => {
      const news = await fetchLatestNews();
      if (!news) return;

      const embed = embedConstructor(news);
      channel.send({ embeds: [embed] });
    }, FETCH_INTERVAL_IN_MS);
  });
};
