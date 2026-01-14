import { ApplicationCommandOptionType, PermissionsBitField } from 'discord.js';
import {
  checkTodaysBirthdays,
  saveBirthday,
} from '../services/birthdayService.js';

import type { Command } from '../interfaces/Command.js';

export const Birthday: Command = {
  name: 'aniversario',
  description: 'Registra um aniversário',
  defaultMemberPermissions: PermissionsBitField.Flags.Administrator,
  options: [
    {
      name: 'data',
      type: ApplicationCommandOptionType.String,
      description: 'Data do aniversário (formato: DD-MM)',
      required: true,
    },
    {
      name: 'nome',
      type: ApplicationCommandOptionType.String,
      description: 'Nome da pessoa',
      required: true,
    },
  ],
  async run(_client, interaction) {
    const date = interaction.options.get('data')?.value as string;

    // Validar formato da data (DD-MM)
    if (!/^\d{2}-\d{2}$/.test(date)) {
      return interaction.reply({
        content: 'Por favor, use o formato DD-MM (exemplo: 25-12)',
        ephemeral: true,
      });
    }

    const [day, month] = date.split('-').map(Number);

    // Validar dia e mês
    if (month < 1 || month > 12 || day < 1 || day > 31) {
      return interaction.reply({
        content: 'Data inválida. Use um dia e mês válidos.',
        ephemeral: true,
      });
    }

    await saveBirthday({
      name: interaction.options.get('nome')?.value as string,
      date: date,
    });

    await checkTodaysBirthdays(_client);

    return interaction.reply({
      content: `✅ Aniversário registrado para o dia ${date}!`,
      ephemeral: true,
    });
  },
};
