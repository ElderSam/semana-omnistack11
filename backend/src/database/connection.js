const knex = require('knex');
const configuration = require('../../knexfile'); //importa configurações do arquivo knexfile

//cria uma conexão com o Banco de Dados
const connection = knex(configuration.development);

module.exports = connection;