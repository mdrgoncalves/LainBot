import { Client } from 'discord.js';
import { newsChannel } from './discord.js';

type PostInChatParams = {
  client: Client;
  message: string;
};

export const postInChat = ({ client, message }: PostInChatParams): void => {
  const channel = newsChannel(client);
  channel.send(message);
};
