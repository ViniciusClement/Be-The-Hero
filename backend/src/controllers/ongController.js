const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  //Busca todas as ONGS no BD
  async index(request, response) {
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
  },

  //Insere uma nova ONG no BD
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;
    //Criando id da ONG
    const id = crypto.randomBytes(4).toString('HEX');
    //Inserindo no BD
    await connection('ongs').insert({
      //Cols
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });
    return response.json({ id });
  }
};