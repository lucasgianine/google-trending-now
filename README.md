# 📰 Google Trends: Trending Now
O objetivo desse projeto é trazer uma aplicação que salva no seu banco de dados as noticias mais relevantes disponibilizadas pela API Google Trends.
## Tecnologia
Nome | Descrição | Função
--- | --- | ---
[TypeScript](https://www.typescriptlang.org/) | Linguagem | Backend
[Node.js](https://nodejs.org/en) | Biblioteca | Backend
[PostgreSQL](https://www.postgresql.org/) | Linguagem SQL | Database
[Prisma](https://www.prisma.io/) | OCR | Database Querys
[Google Trends](https://serpapi.com/google-trends-api) | API | Trendings Topics

## Comandos
Comando | Descrição
--- | ---
`docker compose up` | Executa o PostgreSQL usando Docker
`npm install` | Instala todas as dependências do package-lock.json
`npm run daily` | Executa o endpoind para criar notícias do trend diário no seu banco de dados
`npm run realtime` | Executa o endpoind para criar notícias do trend realtime no seu banco de dados

# Requisições parametrizáveis
É possível parâmetrizar as requisições que desejar enviando um json body para esses endpoints:
### `http://localhost:3000/daily`
Parâmetros | Obrigatoriedade | Descrição
--- | --- | ---
`date` | Obrigatório | Passa a data do dia que deseja pegar as noticias relevantes (e.g. `20240108`)
`amount` | Obrigatório | Passa a quantidade de noticias que deseja obter (min: `1`, max: `20`)
`geo` | Opcional | A localização geográfica de onde quer pegar as notícias (`US` como padrão)
`hl` | Opcional | A linguagem que será retornada as notícias (e.g. `pt`)

### `http://localhost:3000/realtime`
Parâmetros | Obrigatoriedade | Descrição
--- | --- | ---
`cat` | Obrigatório | Passa a categoria das notícias que deseja obter (`b` - Business, `e` - Entertainment, `m` - Health, `t` - Sci/Tech, `s` - Sport, `h` - Top Stories)
`amount` | Obrigatório | Passa a quantidade de noticias que deseja obter (min: `1`, max: `20`)
`geo` | Opcional | A localização geográfica de onde quer pegar as notícias (`US` como padrão)
`hl` | Opcional | A linguagem que será retornada as notícias (e.g. `pt`)

## Saiba mais em: https://serpapi.com/google-trends-trending-now

## About repo
![GitHub last commit](https://img.shields.io/github/last-commit/lucasgianine/google-trending-now)
