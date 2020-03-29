const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router(); //desacopla o módulo de rotas do express em uma nova variável

//Rotas 

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);//rota para listar
routes.post('/ongs', celebrate({
    //validações no params.body
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().min(10).max(11).required(), //tem que ter tamanho entre 10 e 11
        whatsapp: Joi.number(), //tem que ser número válido
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);//rota para inserir 

routes.get('/profile', celebrate({
    //validação do params.headers
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(), //para não tentar validar propriedades desconhecidas
}), ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

module.exports = routes; //exporta as rotas
