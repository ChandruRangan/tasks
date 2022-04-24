const express = require("express");
const app = express();
const port = 3001;
const knex = require("knex");

const axios = require("axios");
app.set("view engine", "ejs");

const bodyParser = require("body-parser");
const { response } = require("express");
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
           
      db("joke")
    .insert({ joke: jokes })
    .returning("*")
    .then((response) => {
     console.log(response)
    })
    
      
    
      res.render("jokes", { joke: jokes });
    });
});

// app.post("/insert", (req, res) => {
//   axios
//   .get("https://v2.jokeapi.dev/joke/Programming?type=single")
//   .then((results) => {
//     var joke = results.data.joke;
    
//     db("joke")
//     .insert({ programing_jokes: joke })
//     .returning("*")
//     .then(() => {
//       res.redirect("/");
//     })
//     .catch(err => {
//       res.status(400).json({ message: "unable to insert" });
//     });

//     res.render("jokes", { joke: joke });
//   });
  

// });

app.get("/display", (req, res) => {
  db.select("*")
    .from("joke")
    .then((datas) => {
      console.log(datas);
      res.render("display", { data: datas });
    })
    .catch((err) => res.status(400).json(err));
});

app.listen( port,() => {
  console.log("The running port is http://localhost:" + `${port}`);
})

