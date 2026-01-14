import { ApplicationCommandOptionType, ChannelType } from 'discord.js';
import type { Command } from '../interfaces/Command.js';

const Clear: Command = {
  name: 'clear',
  description: 'Apaga um número especificado de mensagens do canal.',
  options: [
    {
      name: 'quantidade',
      type: ApplicationCommandOptionType.Integer,
      description: 'Número de mensagens a serem apagadas',
      required: true,
    },
  ],
  async run(_client, interaction) {
    if (interaction.guild?.ownerId !== interaction.user.id) {
      return interaction.reply({
        content: 'Apenas o dono do servidor pode usar este comando.',
        ephemeral: true,
      });
    }

    const quantidade = interaction.options.get('quantidade')?.value as number;
    if (!quantidade || quantidade < 1 || quantidade > 100) {
      return interaction.reply({
        content: 'Por favor, forneça um número entre 1 e 100.',
        ephemeral: true,
      });
    }

    const channel = interaction.channel;

    if (!channel || channel.type !== ChannelType.GuildText) {
      return interaction.reply({
        content: 'Não foi possível apagar as mensagens neste canal.',
        ephemeral: true,
      });
    }

    try {
      await channel.bulkDelete(quantidade, true);
      
      return interaction.reply({
        content: `🧹 ${quantidade} mensagens apagadas!`,
        ephemeral: true,
      });
    } catch (error) {
      return interaction.reply({
        content: 'Ocorreu um erro ao tentar apagar as mensagens.',
        ephemeral: true,
      });
    }
  },
};

export default Clear;
