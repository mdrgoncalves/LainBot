import { Client } from 'discord.js';
import { newsChannel } from './discord';

type PostInChatParams = {
  client: Client;
  message: string;
};

export const postInChat = ({ client, message }: PostInChatParams): void => {
  const channel = newsChannel(client);
  channel.send(message);
};
