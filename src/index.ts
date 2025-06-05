import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import http from 'http';

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

const PORT = process.env.PORT || 3000;

http
  .createServer((_, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot está rodando!');
  })
  .listen(PORT, () => {
    console.log(`Servidor HTTP rodando na porta ${PORT}`);
  });
