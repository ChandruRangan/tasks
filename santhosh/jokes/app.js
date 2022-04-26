const express = require("express");
const app = express();
const port = 3000;
const knex = require("knex");

const axios = require("axios");
app.set("view engine", "ejs");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "santhosh",
    password: "santhosh123",
    database: "santhoshdb",
  },
});

app.get("/", (req, res) => {
  axios
    .get("https://v2.jokeapi.dev/joke/Programming?type=single")
    .then((results) => {
      var joke = results.data.joke;
      res.render("jokes", { joke: joke });
    })
    .catch(err => {
      res.status(400).json({ message: "couldn't insert the response" });
    });
});

app.post("/insert", (req, res) => {
  const {joke}=req.body;
  db("jokes")
    .insert({ fetched_joke: joke })
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      res.status(400).json({ message: "couldn't fetch the response from api" });
    });
});


app.listen(port, () => {
  console.log(`The running port is: ${port}`);
});

