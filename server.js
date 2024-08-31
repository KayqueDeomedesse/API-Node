// Kayque Siqueira Deomedesse
// 5 AMS (Desenvolvimento de Sistemas Fatec)
// Atividade Pratica - Criar api com Express


const express = require('express');
const { Router } = require('express');

const users = require('./json/users.json')
const docs = require('./json/docs.json')

const app = express();
const route = Router();

app.use(express.json())

route.get('/', (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      message:
        "API rodando... entre nas rotas '/users' ou '/docs' ",
    }))
})

route.get('/users', (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.end(JSON.stringify(users));
})

route.get('/docs', (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.end(JSON.stringify(docs));
})

route.get('*', (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 404;
    res.end(
      JSON.stringify({
        message: `Erro ${res.statusCode}: Essa rota não foi encontrada. Tente novamente utilizando /users ou /docs`,
      }));
})

const port = 3300;

app.use(route)
app.listen(port, () => {
  console.log(`Servidor rodando na porta: http://localhost:${port}/`);
});