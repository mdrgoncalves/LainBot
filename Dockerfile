# Imagem base Node.js
FROM node:20-alpine

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

# Instalar as dependências do projeto usando Yarn
RUN yarn install --frozen-lockfile

# Copia o código-fonte da aplicação para o diretório de trabalho
COPY . .

# Compilar o código TypeScript para JavaScript
RUN yarn build

# Comando para iniciar a aplicação
CMD ["yarn", "start"]