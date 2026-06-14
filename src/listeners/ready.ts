import { ActivityType } from 'discord.js';
import { setCommands } from '../utils/setCommands.js';

import type { Client } from 'discord.js';

export default (client: Client): void => {
  client.on('ready', async () => {
    if (!client.user || !client.application) {
      return;
    }

    client.user.setActivity('Todos estamos conectados', {
      type: ActivityType.Custom,
    });

    console.log(`${client.user.username} is alive!`);

    await setCommands(client);
  });
};
