import { ApplicationCommandType, InteractionResponse } from 'discord.js';
import { embedConstructor } from '../utils/embedConstructor';
import { fetchLatestNews } from '../services/newsService';

import type { Command } from '../interfaces/Command';

export const TestNews: Command = {
  name: 'testnews',
  description: '[DEBUG] Test return news',
  type: ApplicationCommandType.ChatInput,
  run: async (_, interaction): Promise<InteractionResponse<boolean>> => {
    if (!(interaction.user.id !== '142075485000695809')) {
      return interaction.reply('You are not allowed to use this command');
    }

    const news = await fetchLatestNews();
    if (!news) return interaction.reply('No news found');
    const embed = embedConstructor(news);
    return interaction.reply({ embeds: [embed] });
  },
} as Command;
