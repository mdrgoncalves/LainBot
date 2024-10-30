import { Client, TextChannel } from 'discord.js';

export const generalChat = (client: Client) => {
  return client.channels.cache.get('145615594991910912') as TextChannel;
};
