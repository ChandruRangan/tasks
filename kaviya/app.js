const express = require('express');
const app = express();
// const db=require("./tododb.js");
const knex = require('knex')
app.set('view engine','ejs');
const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'kaviya',
        password: 'kaviya06*',
        database: 'todolist'
    }
});

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/" + "index.html");
// });



app.get('/insert', (req, res) => {

    db('todolist').insert({ list: req.query['name'] }).returning("*").then(() => { res.redirect('/'); }).catch(err => {
        res.status(400).json({ message: 'failed' });
});
});
app.get('/',(req,res)=>{
        db.select('*')
        .from('todolist')
        .then((data)=>{
          res.render('ris',{data: data});
         })
         .catch((err) => res.status(400).json(err));
});
    // var ris=req.query['name'];
    // res.redirect('back');
    // db.data.query(`insert into todolist values('${ris}');`,(res,err) => {
    //     if(err)
    //     {
    //         console.log(err);
    //     }
    //     else{
    //         console.log("success");
    //     }
    // });




app.listen(9000);