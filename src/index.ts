import { Client } from "discord.js";
import dotenv from 'dotenv';

import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";

console.log("Bot is starting...");
dotenv.config();

const client = new Client({
    intents: []
});

ready(client);


client.login(process.env.BOT_TOKEN);