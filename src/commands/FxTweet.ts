import {
  CommandInteraction,
  Client,
  ApplicationCommandType,
  ApplicationCommandOptionType,
  InteractionResponse,
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
  run: (
    client: Client,
    interaction: CommandInteraction,
  ): Promise<InteractionResponse<boolean>> => {
    const inputURL = interaction.options.get('tweet')?.value as string;
    if (!inputURL.startsWith('https://twitter.com')) {
      return interaction.reply({
        content: 'Please provide a valid Twitter URL, b-baka!',
        ephemeral: true,
      });
    }

    const modifiedUrl = inputURL.replace(
      'https://twitter.com',
      'https://fxtwitter.com',
    );

    return interaction.reply({
      content: modifiedUrl,
    });
  },
};
