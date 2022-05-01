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



