import ready from './ready.js';
import interactionCreate from './interactionCreate.js';
import embedMessage from './embedMessage.js';

import type { Client } from 'discord.js';

export const startListeners = (client: Client): void => {
  interactionCreate(client);
  embedMessage(client);
  ready(client);
};
