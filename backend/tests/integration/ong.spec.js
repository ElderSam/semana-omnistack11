const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    //antes de cada teste
    beforeEach( async () => {
        await connection.migrate.rollback(); //zera o banco de dados
        await connection.migrate.latest(); //executa as migrations
    });

    afterAll( async () => {
        await connection.destroy();
    });
    
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                "name": "nome da ONG",
                "email": "contato@greenpeace.com.br",
                "whatsapp": "1134557000",
                "city": "São Paulo",
                "uf": "SP"
            });

            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
            //console.log(response.body);

    });
});