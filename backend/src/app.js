const express = require('express'); //importa o pacote Express
const cors = require('cors'); //importa o pacote Cors
const { errors } = require('celebrate');
const routes = require('./routes'); //importa o arquivo routes

const app = express(); //instancia a aplicação

//determina quem tem acesso à aplicação. Se não tiver nada, vai permitir todo frontend
app.use(cors());

//caso o backend estiver em um servidor
/*app.use(cors({ 
    origin: 'http://meuapp.com'
}));*/

app.use(express.json()); //faz o JSON recebido ser entendido pela aplicação
app.use(routes); // a partir daqui nosso app está funcionando com as rotas
app.use(errors());

module.exports = app;