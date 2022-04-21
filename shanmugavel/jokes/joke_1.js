
const express=require('express');
const app=express();
const knex=require('knex');
const axios=require('axios');
const{json}=require('body-parser');

const db=knex({client:'pg',
connection:
{
host:'localhost',
user:'shan',
password:12345,
database:'postgres'
},
});

db.select().from('jokes').then((res)=>{
console.log(res);
}).catch((err)=>{
console.log(err);
});

axios.get('https://v2.jokeapi.dev/joke/Programming?type=single').then((res)=>{
var joke=res.data.joke;
db('jokes').insert({/*s_no:'5' ,*/jokes:joke}).then((res=>{
    console.log('inserted');
})).catch((err)=>{
    console.log(err);
});

app.get('/',(req,res)=>{
    db.select('*').from('jokes').orderByRaw('s_no DESC').limit(1).then((val)=>{
        res.sendFile(__dirname+'/'+'index.js');
        res.send(val);
    }).catch((e)=>
    {
        res.send(e);
    })
    });

app.get('/next',(req,res)=>
{
    db.select('*').from('jokes') .then((val)=>
    {
        res.send.json(val);
    }).catch((error)=>
    {
        res.send(error);
    })
})

app.listen(1233);
});



























































// app.post("/insert", (req, res) => {
//     const { joke } = req.body;
//     db("jokes")
//         .insert({ jokes: joke })
//         .returning("*")
//         .then(() => {
//             res.redirect("/");
//         })
//         .catch(err => {
//             res.status(400).jason({ message: "unable to insert" });
//         });
          
//     })

