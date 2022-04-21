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
    user: "riswan1",
    password: "Riswan@123",
    database: "joke",
  },
});
app.post("/insert", (req, res) => {
    var ris=req.body.jokes;
      db("jokes").insert({ Joke: ris})
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {
        res.status(400).json({ message: "retry" });
      });
  
  });

app.get('/',(req,res)=>{
axios.get('https://v2.jokeapi.ev/joke/Programming?type=single').then((faz)=>{
    var data=faz.data.joke;
    res.render("jokes",{joke:data})
})
.catch((err) => {
  res.render("err");
});
});

app.listen(2000, () => {
  console.log("http://localhost:2000");
});