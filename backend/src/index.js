const express = require('express'); //importa o pacote Express
const cors = require('cors'); //importa o pacote Cors
const routes = require('./routes'); //importa o arquivo routes

const app = express(); //instancia a aplicação

//determina quem tem acesso à aplicação. Se não tiver nada, vai permitir todo frontend
app.use(cors({ 
    //origin: 'hhtp://meuapp.com'
}));

app.use(express.json()); //faz o JSON recebido ser entendido pela aplicação
app.use(routes); // a partir daqui nosso app está funcionando com as rotas

app.listen(3333); //ouve a porta que foi passada