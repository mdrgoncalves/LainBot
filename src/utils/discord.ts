import { Client, TextChannel } from 'discord.js';

const NEWS_CHANNEL_ID = '1301243215088717974';

type GetChannelProps = {
  client: Client;
  channelId: string;
};

const getChannel = ({
  client,
  channelId,
}: GetChannelProps): TextChannel => {
  return client.channels.cache.get(channelId) as TextChannel;
};

export const newsChannel = (client: Client) =>
  getChannel({
    client,
    channelId: NEWS_CHANNEL_ID,
  }) as TextChannel;
