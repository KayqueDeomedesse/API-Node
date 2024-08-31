// Kayque Siqueira Deomedesse
// 5 AMS (Desenvolvimento de Sistemas Fatec)
// Atividade Pratica - 1/2 - Criar api com node.js


const { createServer } = require("node:http");

const users = [
    {
        id: 1,
        name: "Mateus Windsor",
        email: "mateus.windsor@email.com",
        senha: "mateuswin001",
    },

    {
        id: 2,
        name: "Laura Maria",
        email: "lauramaria@email.com",
        senha: "lauran0611",
    },

     {
        id: 3,
        name: "Marina Diomedes",
        email: "marina.diomedes1@email.com",
        senha: "marinadc2"
    },

    {
        
        id: 4,
        name: "Ana Souza",
        email: "ana.souza@email.com",
        senha: "souza@123"
    },

    {
        id: 5,
        name: "Carlos Filho",
        email: "carlos.filho@email.com",
        senha: "car@343"
    }
];

const docs = [
    {
        id: 1,
        id_user: 1,
        tipo: "Trabalho",
        titulo: "Atividade Prática",
        curso: "ADS",
        turno: "Manhã"
    },

    {
        id: 2,
        id_user: 2,
        tipo: "Tarefa",
        titulo: "Tecnologias Emergentes",
        curso: "Sistemas de Informação",
        turno: "Noite"
    },

    {
        id: 3,
        id_user: 3,
        tipo: "Artigo",
        titulo: "Projeto Integrador",
        curso: "Desenvolvimento de Sistemas",
        turno: "Manhã"
    },

     {
    id: 4,
    id_user: 4,
    tipo: "Relatório",
    titulo: "Química Ambiental",
    curso: "Química",
    turno: "Tarde"
    },

    {
        id: 5,
        id_user: 5,
        tipo: "Tese",
        titulo: "Redes Neurais",
        curso: "Engenharia Elétrica",
        turno: "Noite"
    }
];

const requestHandler = (req, res) => {
  const { method, url } = req;

  res.setHeader("Content-Type", "application/json");

  if (method === "GET" && url === "/") {
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message:
          "API rodando... entre nas rotas '/users' ou '/docs' ",
      })
    );
  } else if (method === "GET" && url === "/users") {
    res.statusCode = 200;
    res.end(JSON.stringify(users));
  } else if (method === "GET" && url === "/docs") {
    res.statusCode = 200;
    res.end(JSON.stringify(docs));
  } else {
    res.statusCode = 404;
    res.end(
      JSON.stringify({
        message: `Erro ${res.statusCode}: Essa rota não foi encontrada. Tente novamente utilizando /users ou /docs`,
      })
    );
  }
};

const server = createServer(requestHandler);
const port = 3300;

server.listen(port, () => {
  console.log(`Servidor rodando na porta: http://localhost:${port}/`);
});