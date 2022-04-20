const express = require("express");
const app = express();
const knex = require("knex");
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const db = knex({
  client: "postgresql",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "sandy@001",
    database: "todo",
  },
});
app.post("/insert", (req, res) => {
  const { name } = req.body;
  db("todolist")
    .insert({ task: name })
    .returning("*")
    .then(_ => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status(400).json({ message: "Couldn't create a new task" });
    });
});

app.get("/", (req, res) => {
  db.select("*")
    .from("todolist")
    .then((data) => {
      res.render("sample", { data: data });
    })
    .catch((err) => res.status(400).json(err));
});
app.listen(3000);