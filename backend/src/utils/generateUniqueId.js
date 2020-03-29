const crypto = require('crypto'); //estamos utilizando nesse caso para gerar caracteres aleatórios

module.exports =  function generateUniqueId(){
    return crypto.randomBytes(4).toString('HEX'); //criar o id, gerando 4 bytes de caracteres Hexadecimais
    
}