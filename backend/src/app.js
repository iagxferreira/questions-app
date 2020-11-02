//Importando o Express
const express = require('express');

//importando as rotas
const routes = require('./routes');

const cors = require('cors')

const app = express();

//define quem pode ou não acessar a API
app.use(cors());
//setando o express pra trabalhar com JSON
app.use(express.json());

//é importante que isso venha abaixo da definição de que o app usará JSON
app.use(routes);

//escutando na porta 3333
module.exports = app;