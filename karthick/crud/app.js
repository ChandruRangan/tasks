const express = require("express");
const app = express();
const port = 5000;
app.set("view engine", "ejs");

const knex = require("knex");
const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "karthick",
    password: "ruthra",
    database: "store",
  },
});

app.get("/", (req, res) => {
  db.select("*").from("categories").then((data)=>{
    
      res.render("crud",{ cat:data });
  }).catch((err)=>{
    res.status(400).json(err);
  });

});

app.listen(port, () => {
  console.log(`Running server is http://localhost:${port}`);
});
