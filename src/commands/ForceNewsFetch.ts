import { ApplicationCommandType } from 'discord.js';

import { fetchRpgNews } from '../services/newsService.js';
import { newsChannel } from '../utils/discord.js';

import type { Command } from '../interfaces/Command.js';

export const ForceNewsFetch = {
  name: 'force-news',
  description: 'Força a busca por novas notícias',
  type: ApplicationCommandType.ChatInput,
  run: async (_, interaction) => {
    if (!interaction.user) {
      throw new Error('Usuário não definido na interação.');
    }

    const client = interaction.client;
    if (!client) throw new Error('Canal ou cliente não definido.');

    const channel = newsChannel(client);

    await fetchRpgNews(channel, client);

    return interaction.reply({
      content: '🔄 Buscando novas notícias...',
      ephemeral: true,
    });
  },
} satisfies Command;
