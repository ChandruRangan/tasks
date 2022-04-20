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
    user: "riswan1",
    password: "Riswan@123",
    database: "todo",
  },
});

app.post("/insert", (req, res) => {
  db("todolist")
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
    .from("todolist")
    .then((data) => {
      res.render("ris", { data: data });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.put("/moveTaskDone", (req, res) => {
    const { name, id } = req.body;
    if (name === "todo")
     {
    db("todolist")
    .where("id", "=", id).update("status", 1)
    .returning("status").then(task => {res.json(task[0])})}
     else {
    db("todolist").where("id", "=", id).update("status", 0)
    .returning("status")
    .then(task => {res.json(task[0])});
    }
    });

app.listen(5454);
