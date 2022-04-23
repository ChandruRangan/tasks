const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.view("view engine","ejs");
const knex = require('knex');
//connecting our db
const db = knex({
    client: 'pg',
    connection: {
        host: "localhost",
        user: "postgres",
        password: "123"
        database: "todotask",
    }
})




