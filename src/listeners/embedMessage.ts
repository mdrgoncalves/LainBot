import { Client } from 'discord.js';
import cron from 'node-cron';

import { fetchRpgNews } from '../services/newsService';
import { newsChannel } from './../utils/discord';

export default (client: Client): void => {
  client.on('ready', async () => {
    const channel = newsChannel(client);

    cron.schedule('*/30 * * * *', async () => {
      console.log('Running cron job to fetch latest news');
      await fetchRpgNews(channel, client);
    });
  });
};
