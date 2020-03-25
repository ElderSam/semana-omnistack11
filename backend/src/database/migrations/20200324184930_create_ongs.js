exports.up = function(knex) { //Método UP é responsável por criar a tabela
    return knex.schema.createTable('ongs', function(table){ //cria uma nova tabela ONGS que tem uma função que recebe a tabela
        table.string('id').primary(); //coluna 1, chave primária
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

exports.down = function(knex) { //caso precise deletar a tabela, desfazer
  knex.schema.dropTable('ongs');
};
