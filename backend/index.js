const express = require('express'); //importa o Express

const app = express(); //instancia a aplicação

//Rota principal 
app.get('/', (request, response) => {
    return response.json({  //envia uma JSON para a página
        evento: 'Semana OmniStack 11.0',
        aluno: 'Elder Samuel da Silva'
    });
});

app.listen(3333); //ouve a porta que foi passada