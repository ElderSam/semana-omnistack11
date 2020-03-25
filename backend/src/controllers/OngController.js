const crypto = require('crypto'); //estamos utilizando nesse caso para gerar caracteres aleatórios
const connection = require('../database/connection');

module.exports = {

    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },
    

    async create (request, response) {

        const {name, email, whatsapp, city, uf} = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX'); //criar o id, gerando 4 bytes de caracteres Hexadecimais
    
        //insere na tabela ongs
        await connection('ongs').insert({
            id,
            name,
            email, 
            whatsapp,
            city,
            uf,
        });
        
        return response.json({id});
    }

};