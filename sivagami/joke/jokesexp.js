const express = require("express");
const app = express();
const knex = require("knex");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const axios = require("axios");

app.set("view engine", "ejs");

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "siv",
    password: "sivi123",
    database: "postgres",
  },
});
app.post("/insert", (req, res) => {
    var siv=req.body.jokes;
      db("joke").insert({ jokes: siv})
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {
        res.status(400).json({ message: "retry" });
      });
  
  });

app.get('/',(req,res)=>{
axios.get('https://v2.jokeapi.dev/joke/Programming?type=single').then((puppy)=>{
    var data=puppy.data.joke;
    res.render("jokes",{joke:data});
})
.catch((err) => {
  res.status(400).json({ message: "retry" });
});
});

app.listen(2000, () => {
  console.log("http://localhost:2000");
});