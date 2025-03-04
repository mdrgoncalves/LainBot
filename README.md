# Lain Bot

Lain Bot é um bot para Discord que fornece algumas funcionalidades para um grupo privado, incluindo comandos personalizados e integração com feeds de notícias.

## Funcionalidades

- **Comando Hello**: Retorna uma saudação personalizada.
- **Integração com Feed de Notícias**: Busca e posta as últimas notícias do site RPG Site no canal de notícias do Discord.

## Pré-requisitos

- Node.js v18.15.0 ou superior
- Yarn v3.5.0 ou superior

## Instalação

1. Clone o repositório:
    ```sh
    git clone <URL_DO_REPOSITORIO>
    cd lain-bot
    ```

2. Instale as dependências:
    ```sh
    yarn install
    ```

3. Crie um arquivo [.env](http://_vscodecontentref_/1) na raiz do projeto e adicione o token do seu bot:
    ```env
    BOT_TOKEN=seu_token_aqui
    ```

## Scripts 

Disponíveis- `start`: Inicia o bot.
    ```sh
    yarn start
    ```

- `dev`: Inicia o bot em modo de desenvolvimento com hot-reload.
    ```sh
    yarn dev
    ```

- `build`: Compila o projeto TypeScript.
    ```sh
    yarn build
    ```

## Estrutura do Projeto

- [commands](http://_vscodecontentref_/2): Contém os comandos do bot.
- [interfaces](http://_vscodecontentref_/3): Contém as interfaces TypeScript utilizadas no projeto.
- [listeners](http://_vscodecontentref_/4): Contém os listeners de eventos do Discord.
- [services](http://_vscodecontentref_/5): Contém os serviços utilizados pelo bot.
- [utils](http://_vscodecontentref_/6): Contém utilitários diversos.

## Contribuidores

- Michael Gonçalves <mdr.goncalves@hotmail.com>

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.