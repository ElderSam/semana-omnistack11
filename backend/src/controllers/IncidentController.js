const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const {page = 1} = request.query; //para paginação de resultados

        const [count] = await connection('incidents').count(); //retorna o total de registros da tabela

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //juta tabelas
            .limit(5) 
            .offset((page -1) * 5) //mostra 5 registros por vez
            .select(['incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ]); //obs: por segurança não retorna o id da ong

            response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response){
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
           title,
           description,
           value,
           ong_id,
        });

        return response.json({id});
    },

    async delete(request, response){
        const {id} = request.params;
        const ong_id = request.headers.authorization; //para não deletar incidentes de outra ONG
    
        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first(); //retorna apenas um resultado

        if(incident.ong_id !== ong_id){
            return response.status(401).json({error: 'Operation not permitted.'}); //retorna não status: não autorizado
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send(); //status 204 quando retorna resposta sem corpo, sem conteúdo
    }
}