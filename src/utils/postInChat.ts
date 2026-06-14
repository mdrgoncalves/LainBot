import { Client } from 'discord.js';
import { newsChannel } from './discord.js';

type PostInChatParams = {
  client: Client;
  message: string;
};

export const postInChat = async ({
  client,
  message,
}: PostInChatParams): Promise<void> => {
  try {
    const channel = newsChannel(client);
    await channel.send(message);
  } catch (error) {
    console.error('Erro ao postar mensagem no canal de notícias:', error);
  }
};
