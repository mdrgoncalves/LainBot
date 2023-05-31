import {
  CommandInteraction,
  Client,
  ApplicationCommandType,
  ApplicationCommandOptionType,
} from 'discord.js';

import { Command } from '../Command';

export const FxTweet: Command = {
  name: 'fxtweet',
  description: 'Fix a tweet video embed',
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'tweet',
      description: 'Twitter URL',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  run: async (client: Client, interaction: CommandInteraction) => {
    const inputURL = interaction.options.get('tweet')?.value as string;

    if (!inputURL.startsWith('https://twitter.com')) {
      await interaction.reply({
        content: 'Please provide a valid Twitter URL, b-baka!',
        ephemeral: true,
      });
      return;
    }

    const modifiedUrl = inputURL.replace(
      'https://twitter.com',
      'https://fxtwitter.com',
    );

    await interaction.reply({
      content: modifiedUrl,
    });
  },
};
