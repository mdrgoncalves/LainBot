import { postInChat } from '../utils/postInChat.js';
import { writeCache, readCache } from '../utils/cache.js';
import { BIRTHDAYS_FILE_NAME } from '../constants/cacheFilesNames.js';

import type { Client } from 'discord.js';

type Birthday = {
  name: string;
  date: string; // Formato: 'DD/MM'
};

const getTodayString = (): string => {
  const today = new Date();

  return `${String(today.getDate()).padStart(2, '0')}-${String(
    today.getMonth() + 1,
  ).padStart(2, '0')}`;
};

export const readBirthdays = async (): Promise<Birthday[]> => {
  const birthdays = await readCache(BIRTHDAYS_FILE_NAME);
  return birthdays as unknown as Birthday[];
};

export const saveBirthday = async ({ name, date }: Birthday) => {
  const birthdays = await readBirthdays();

  const filteredBirthdays = birthdays.filter(
    (birthday: Birthday) => birthday.name.toLowerCase() !== name.toLowerCase(),
  );

  filteredBirthdays.push({ name, date });

  await writeCache<Birthday>(filteredBirthdays, BIRTHDAYS_FILE_NAME);
};

export const checkAllBirthdays = async (client: Client) => {
  const birthdays = await readBirthdays();

  for (const birthday of birthdays) {
    postInChat({
      client,
      message: `🎉 Aniversário de **${birthday.name}** é em ${birthday.date} 🎂`,
    });
  }
};

export const checkTodaysBirthdays = async (client: Client) => {
  const birthdays = await readBirthdays();
  const todayString = getTodayString();

  const todaysBirthdays = birthdays.filter(
    birthday => birthday.date === todayString,
  );

  for (const birthday of todaysBirthdays) {
    postInChat({
      client,
      message: `🎉 Hoje é aniversário de **${birthday.name}**! Parabéns! 🎂`,
    });
  }
};
