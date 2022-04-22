const { db }=require('./config/database.js');
db('categories').select('category_name').where('category_id',5).then((response)=>{console.log(response)});