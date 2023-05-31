import { CommandInteraction, Client, ApplicationCommandType } from 'discord.js';
import { Command } from '../Command';

export const Hello: Command = {
  name: 'hello',
  description: 'Returns a greeting',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const username = interaction.user?.username;
    const content = `Ara ara... Hi, ${username}-kun!`;

    await interaction.reply({
      ephemeral: true,
      content,
    });
  },
};
