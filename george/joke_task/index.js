const express = require("express");
const app = express();
const knex = require("knex");
const port = 3000;
const axios = require("axios");
app.set("view engine","ejs");
const bodyparser = require("body-parser");
app.use (bodyParser.urlencoded({extended:true}))
const db = knex({
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "123",
      database: "jokes",
    },
  });
  app.get ('/',(req,res) =>{
      axios.get("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((result) => {
      var joke = result.data.joke;
      console.log(joke);  
      res.render("display",{})
      })
  })
  app.post('/',(req,res) =>{
      const joke =req.body;
      db("jokes")
      .insert({projokes:joke})
      .returning("*")
      .then(() =>{
          res.redirect("/");
      })
      .catch(err =>{
       res.status(400).json({ message: "unable to insert" });
      });
      });
      