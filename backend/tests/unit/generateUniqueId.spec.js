const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID',  () => {
    //adiciona os testes
    it('should generate an unique ID', () => {
        //faz os testes
        const id = generateUniqueId(); 

        expect(id).toHaveLength(8); //testa o id gerado
    });
});