const express = require("express");
const app = express();
const knex = require("knex");
const axios = require("axios");
const db=knex({client:'pg',
connection:
{
host:'localhost',
user:'shan',
password:12345,
database:'postgres'
},
});


app.put('/insert',(req,res)=>{
    axios.get('https://v2.jokeapi.dev/joke/Programming?type=single').then(async(resp)=>{
       await db('jokes').insert({jokes:resp.data.joke})
        .returning("jokes")
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(400).send(err));
    });
        
})
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/" + "joke.html");
  });

  app.listen(1239);



// app.get('/',(req,res)=>{
//     db.select('*').from('jokes').orderByRaw('s_no DESC').limit(1).then((val)=>{
//         res.sendFile(__dirname+'/'+'index.js');
//         res.send(val);
//     }).catch((e)=>
//     {
//         res.send(e);
//     })
//     });
// app.get('/next',(req,res)=>
// {
//     db.select('*').from('jokes') .then((val)=>
//     {
//         res.send.json(val);
//     }).catch((error)=>
//     {
//         res.send(error);
//     })
// })


