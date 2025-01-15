import ready from './ready';
import database from './database';
import interactionCreate from './interactionCreate';
import embedMessage from './embedMessage';

import type { Client } from 'discord.js';
import eraser from './eraser';

export const startListeners = (client: Client): void => {
  database(client);
  interactionCreate(client);
  embedMessage(client);
  ready(client);
};
