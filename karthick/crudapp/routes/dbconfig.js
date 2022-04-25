const knex=require('knex');
exports.db=knex({
client:'pg',
connection:{
    host:'localhost',
    user:'karthick',
    password:'ruthra',
    database:'store'
}
});
