const express = require("express");
const app = express();
const knex = require("knex");
app.set("view engine", "ejs");
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());



const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "siv",
    password: "sivi123",
    database: "todo",
  },
});

fatal: Not possible to fast-forward, aborting



app.post("/add", (req, res) => {
  db("todos")
    .insert({ task: req.body.name})
    .returning("*")
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status(400).json({ message: "failed" });
    });
});


app.get("/", (req, res) => {
  db.select("*")
    .from("todos")
    .then((data) => {
      res.render("todo", { data: data });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


app.put("/moveTaskDone", (req, res) => {
    const { name, id } = req.body;
    if (name === "todo")
     {
    db("todos")
    .where("id", "=", id).update("status", 1)
    .returning("status").then(task => {res.json(task[0])})}
     else {
    db("todos").where("id", "=", id).update("status", 0)
    .returning("status")
    .then(task => {res.json(task[0])});
    }
    });

app.listen(5454);