# 🔍 Google Trends: Trending Now
O objetivo desse projeto é trazer uma aplicação que salva no seu banco de dados as noticias mais relevantes disponibilizadas pela API Google Trends.
## Tecnologia
Nome | Descrição | Função
--- | --- | ---
[TypeScript](https://www.typescriptlang.org/) | Linguagem | Backend
[Node.js](https://nodejs.org/en) | Biblioteca | Backend
[PostgreSQL](https://www.postgresql.org/) | Linguagem SQL | Database
[Prisma](https://www.prisma.io/) | ORM | Database Querys
[Google Trends](https://serpapi.com/google-trends-api) | API | Trendings Topics

## Antes de começar
1. Crie na pasta raíz uma variável de ambiente (`.env`)
2. `SERPAPI_API_KEY=sua_chave_serpapi`
3. Crie na pasta do Prisma uma variável de ambiente (`.env`)
4. `DATABASE_URL='postgresql://username:password@localhost:port/postgres'`
5. Rode os comandos abaixo

## Comandos
Comando | Descrição
--- | ---
`docker compose up` | Executa o PostgreSQL usando Docker
`npm install` | Instala todas as dependências do package-lock.json
`npm run daily` | Executa o endpoind para criar notícias do trend diário no seu banco de dados
`npm run month` | Executa o endpoind para criar notícias do trend mensal (daily) no seu banco de dados
`npm run realtime` | Executa o endpoind para criar notícias do trend realtime no seu banco de dados

# Requisições parametrizáveis
É possível parâmetrizar as requisições que desejar enviando um json body para esses endpoints:
### `http://localhost:3000/daily`
Parâmetros | Obrigatoriedade | Descrição
--- | --- | ---
`date` | Obrigatório | Passa a data do dia que deseja pegar as noticias relevantes (e.g. `20240108`)
`geo` | Opcional | A localização geográfica de onde quer pegar as notícias (`US` como padrão)
`hl` | Opcional | A linguagem que será retornada as notícias (e.g. `pt`)

### `http://localhost:3000/realtime`
Parâmetros | Obrigatoriedade | Descrição
--- | --- | ---
`cat` | Obrigatório | Passa a categoria das notícias que deseja obter (`b` - Business, `e` - Entertainment, `m` - Health, `t` - Sci/Tech, `s` - Sport, `h` - Top Stories)
`amount` | Obrigatório | Passa a quantidade de noticias que deseja obter (min: `1`, max: `20`)
`geo` | Opcional | A localização geográfica de onde quer pegar as notícias (`US` como padrão)
`hl` | Opcional | A linguagem que será retornada as notícias (e.g. `pt`)

### `http://localhost:3000/month`
Parâmetros | Obrigatoriedade | Descrição
--- | --- | ---
`month` | Obrigatório | Passa o mês que deseja obter as notícias (e.g. `'11'`)
`year` | Obrigatório | Passa o ano que deseja obter as notícias (e.g. `'2023'`)
`geo` | Opcional | A localização geográfica de onde quer pegar as notícias (`US` como padrão)
`hl` | Opcional | A linguagem que será retornada as notícias (e.g. `pt`)

### `http://localhost:3000/trends`
Recebe todas as trends diárias que contenham links iguais.

## Saiba mais em: https://serpapi.com/google-trends-trending-now

## About repo
![GitHub last commit](https://img.shields.io/github/last-commit/lucasgianine/google-trending-now)
