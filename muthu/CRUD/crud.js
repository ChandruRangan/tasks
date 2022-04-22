const { Client } = require("pg");
const client=new Client({
    host: "localhost",
    user: "muthus",
    port: 5432,
    password: "muthu@904743",
    database: "product",
});
function dbcal(query) {
  return new Promise((resolve, reject) => {
    client.connect();
    client.query(query, (err, res) => {
      if (err) {
        reject(err);
      }
      client.end;
      resolve(res.rows);
    });
  });
}
async function exec() {
  const result = await dbcal(
    "select * from categories;"
  );
  console.table(result);
  return;
}
exec();
 
// var mysql = require("pg");
// var con=mysql.createConnection({
//     host: "localhost",
//     user: "muthus",
//     password: "muthu@904743",
//     database: "product",
// });
// con.connect(function(err){
//     if (err) throw err;
//     console.log("Connected");
//     con.query("select * from product",function(err,result){
//         if (err) throw err;
//         console.log("Show Category Details");
//     });
// });


// const { json } = require('body-parser');
// const express=require('express');
// const app=express();
// const knex=require('knex');
// app.get('/',(req,res)=>{
//   db.select('*').from('categories').then((data)=>{
//     res.sendFile(__dirname+'/'+'crud.html');
//     res.send(data);
//   }).catch((e)=>{
//     res.send(e);
//   })
// });

// app.get('/insert',(req,res)=>{
// /* db.select('*').from('categories').then((data)=>{
//   res.send(data);
// }).catch((e)=>{
//   res.send(e);
// }) */
// });

// const db=knex({
//   client:'pg',
//   connection:{
//     host:'localhost',
//     user:'muthus',
//     password:'muthu@904743',
//     database:'product',
//   }
// });

// app.listen(1234);


