const express=require('express');
const app=express();
const port=3000;
const knex=require('knex');
const bodyparser = require("body-parser");
app.set('view engine','ejs');
const axios = require('axios');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended:true }));

const db= knex({
    client:'pg',
    connection:{
        host:"localhost",
        user:"college",
        password:"college",
        database:"jokes",
    },
})
app.get("/",(req,res)=>{
axios.get( "https://v2.jokeapi.dev/joke/Programming?type=single")
.then((joke) => {
    var jokes=joke.data.joke   
    console.log(jokes);
    res.render("jokes",{joke:jokes})
  });
});


app.post("/insert", (req, res) => {
    const {joke}=req.body;
    db("joke").insert({ jokes:joke}).returning("*")
    .then(_=> {
       res.redirect("/");
    }).catch(err => {
        res.status(400).json({ message: "unable to create a new task"});
    });  
});

app.get('/',(req,res)=>{
res.render('jokes');
});

app.listen(3000);