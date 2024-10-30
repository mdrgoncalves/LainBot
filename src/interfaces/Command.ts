import type {
  ChatInputApplicationCommandData,
  Client,
  CommandInteraction,
  InteractionResponse,
} from 'discord.js';

export interface Command extends ChatInputApplicationCommandData {
  run: (
    client: Client,
    interaction: CommandInteraction,
  ) => Promise<InteractionResponse<boolean>>;
}
