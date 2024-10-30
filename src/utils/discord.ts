import { Client, TextChannel } from 'discord.js';

type GetChannelProps = {
  client: Client;
  channelId: string;
};

export const getChannel = ({
  client,
  channelId,
}: GetChannelProps): TextChannel => {
  return client.channels.cache.get(channelId) as TextChannel;
};
