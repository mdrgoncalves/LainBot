import { ActivityType } from 'discord.js';
import { Commands } from '../Commands';

import type { Client } from 'discord.js';

export default (client: Client): void => {
  client.on('ready', async () => {
    if (!client.user || !client.application) {
      return;
    }

    await client.application.commands.set(Commands);

    client.user.setActivity('sua mãe pro alto!', {
      type: ActivityType.Playing,
    });

    console.log(`${client.user.username} is alive!`);
  });
};
