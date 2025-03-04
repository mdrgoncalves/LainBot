import ready from './ready';
import interactionCreate from './interactionCreate';
import embedMessage from './embedMessage';

import type { Client } from 'discord.js';

export const startListeners = (client: Client): void => {
  interactionCreate(client);
  embedMessage(client);
  ready(client);
};
