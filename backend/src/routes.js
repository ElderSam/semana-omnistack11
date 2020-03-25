const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router(); //desacopla o módulo de rotas do express em uma nova variável

//Rotas 

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);//rota para listar
routes.post('/ongs', OngController.create);//rota para inserir 

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes; //exporta as rotas
