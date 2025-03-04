import { Client } from 'discord.js';
import { fetchLatestNews } from '../services/newsService';
import { embedConstructor } from './../utils/embedConstructor';
import { newsChannel } from './../utils/discord';
import { postInChat } from './../utils/postInChat';

const FETCH_INTERVAL_IN_HOURS = 1;
const FETCH_INTERVAL_IN_MS = FETCH_INTERVAL_IN_HOURS * 60 * 60 * 1000;

export default (client: Client): void => {
  client.on('ready', async () => {
    const channel = newsChannel(client);

    const getNews = async () => {
      try {
        const news = await fetchLatestNews();
        if (!news) return;

        const embed = embedConstructor(news);
        channel.send({ embeds: [embed] });
      } catch (error) {
        postInChat({
          client,
          message: 'An error occurred while fetching the latest news: ' + error,
        });
      }
    };

    await getNews();

    setInterval(async () => {
      await getNews();
    }, FETCH_INTERVAL_IN_MS);
  });
};
