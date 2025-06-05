import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

import { startListeners } from './listeners';

console.log('Bot is starting...');
dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

startListeners(client);
client.login(process.env.BOT_TOKEN);
