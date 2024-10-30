import { ApplicationCommandType } from 'discord.js';

import type { Command } from '../interfaces/Command';

export const Hello = {
  name: 'hello',
  description: 'Returns a greeting',
  type: ApplicationCommandType.ChatInput,
  run: (_, interaction) => {
    if (!interaction.user) {
      throw new Error('Usuário não definido na interação.');
    }

    const username = interaction.user.username;
    const content = `Ara ara... Hi, ${username}-kun!`;

    return interaction.reply({
      ephemeral: true,
      content,
    });
  },
} satisfies Command;
