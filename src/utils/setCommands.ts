import { Commands } from '../Commands.js';

import type { Client } from 'discord.js';

export const setCommands = async (client: Client) => {
  if (!client.user || !client.application) {
    console.error('Usuário ou aplicação não definidos no cliente.');
    return;
  }

  const guildId = process.env.GUILD_ID;

  if (!guildId) {
    await client.application.commands.set(Commands);
    return;
  }

  try {
    const guild = await client.guilds.fetch(guildId);
    await guild.commands.set(Commands);
  } catch (error) {
    console.error('Erro ao definir comandos.');
    await client.application.commands.set(Commands);
  }
};
