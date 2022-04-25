const express = require("express");
const app = express();
const port = 3001;
const knex = require("knex");
const axios = require("axios");
app.set("view engine", "ejs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "chandru",
    password: "12345",
    database: "jokes",
  },
});
app.get("/", (req, res) => {
  axios
    .get("https://v2.jokeapi.dev/joke/Programming?type=single")
    .then((results) => {
      var jokes = results.data.joke;
           db("jo")
    .insert({ jo: jokes })
    .returning("*")
    .then((response) => {
     console.log(response)
    })
    res.render("jokes", { jo: jokes });
    });
});

app.get("/display", (req, res) => {
  db.select("*")
    .from("jo")
    .then((datas) => {
      res.render("display", { data: datas });
    })
    .catch((err) => res.status(400).json(err));
});

app.listen( port,() => {
  console.log("The running port is http://localhost:" + `${port}`);
});