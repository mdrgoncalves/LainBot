import { CommandInteraction, Interaction } from 'discord.js';
import { Commands } from '../Commands';

import type { Client } from 'discord.js';

export default (client: Client): void => {
  client.on('interactionCreate', async (interaction: Interaction) => {
    if (interaction.isCommand()) {
      return handleSlashCommand(client, interaction);
    }
  });
};

const handleSlashCommand = async (
  client: Client,
  interaction: CommandInteraction,
): Promise<void> => {
  const slashCommand = Commands.find(
    command => command.name === interaction.commandName,
  );
  if (!slashCommand) {
    await interaction.followUp({ content: 'An error has occurred' });
    return;
  }

  slashCommand.run(client, interaction);
};
