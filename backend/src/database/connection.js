const knex = require('knex');
const configuration = require('../../knexfile'); //importa configurações do arquivo knexfile

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development; //variável ambiente

//cria uma conexão com o Banco de Dados
const connection = knex(config);

module.exports = connection;