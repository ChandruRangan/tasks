const { Pool } = require('pg');
const dotenv = require('dotenv');
const knex=require('knex');
exports.db=knex({
  client:'pg',
  connection:{
    user:'saran',
    password:'Saran@123',
    database:'js',
    host:'localhost'
  }
})

dotenv.config();

// ==> Conexão com a Base de Dados:
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL
// });

// pool.on('connect', () => {
//   console.log('Base de Dados conectado com sucesso!');
// });

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };
