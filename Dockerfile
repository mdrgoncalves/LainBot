FROM node:20-alpine

# Habilita o Corepack para gerenciar Yarn
RUN corepack enable

# Define o diretório de trabalho
WORKDIR /app

# Copia arquivos de dependências
COPY package.json yarn.lock .yarnrc.yml ./

# Prepara a versão correta do Yarn
RUN corepack prepare yarn@3.5.0 --activate

# Instala as dependências
RUN yarn install --frozen-lockfile

# Copia o código fonte
COPY . .

# Compila TypeScript se necessário
RUN yarn build

# Comando para iniciar o bot
CMD ["yarn", "start"]
