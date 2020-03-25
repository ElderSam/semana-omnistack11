exports.up = function(knex) { //Método UP é responsável por criar a tabela
    return knex.schema.createTable('incidents', function(table){ //cria uma nova tabela ONGS que tem uma função que recebe a tabela
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //relacionamento com a tabela ONG
        table.string('ong_id').notNullable();

        //chave estrangeira
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) { //caso precise deletar a tabela, desfazer
  knex.schema.dropTable('incidents');
};
