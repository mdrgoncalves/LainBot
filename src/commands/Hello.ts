import {
  CommandInteraction,
  Client,
  ApplicationCommandType,
  InteractionResponse,
} from 'discord.js';

import { Command } from '../Command';

export const Hello: Command = {
  name: 'hello',
  description: 'Returns a greeting',
  type: ApplicationCommandType.ChatInput,
  run: (
    client: Client,
    interaction: CommandInteraction,
  ): Promise<InteractionResponse<boolean>> => {
    const username = interaction.user?.username;
    const content = `Ara ara... Hi, ${username}-kun!`;

    return interaction.reply({
      ephemeral: true,
      content,
    });
  },
};
