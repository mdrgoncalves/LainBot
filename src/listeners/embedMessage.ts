import { Client } from 'discord.js';
import cron from 'node-cron';

import { fetchRpgNews } from '../services/newsService.js';
import { newsChannel } from './../utils/discord.js';
import { checkTodaysBirthdays } from '../services/birthdayService.js';

export default (client: Client): void => {
  client.on('ready', async () => {
    const channel = newsChannel(client);

    // Primeira execução imediata ao iniciar
    await fetchRpgNews(channel, client);

    // Agendamento normal
    cron.schedule('0 * * * *', async () => {
      await fetchRpgNews(channel, client);
    });

    // Verificar aniversários diariamente às 0h
    cron.schedule('0 0 * * *', async () => {
      await checkTodaysBirthdays(client);
    });
  });
};
