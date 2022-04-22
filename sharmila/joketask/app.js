const express= require("express");
const app = express();
const knex = require("knex");

const axios = require("axios");
app.set("view engine","ejs");
const bodyparser =  require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));

const db = knex({
    client:"pg",
    connection:{
        host: "localhost",
        user: "sharmii",
        password: "1323",
        database: "jokes",
    },
});

app.get("/", (req,res)=> {
   axios
   .get("https://v2.jokeapi.dev/joke/Programming?type=single")
  .then ((result)=>{
      var joke=result.data.joke;
      res.render("joke1",{ joke: joke});
  });
});

  app.post("/insert",(req,res)=> {
      const{joke}= req.body;
      db("joketable")
      .insert({random_joke: joke})
      .returning("*")
      .then(()=>{
      res.redirect("/")
      })
      .catch(err => {
          req.status(400).json({message:"no message"});
      });
  });

 
  
  app.listen(8000,()=> {
      console.log("the running port is 8000");
  });
