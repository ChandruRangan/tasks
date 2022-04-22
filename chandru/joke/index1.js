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
app.get('/',req,res)
axios 
    .get ("https://v2.jokeapi.dev/joke/Programming?type=single")
    .then(results)=>{
        let jokes=results.data.jokes;
    }

