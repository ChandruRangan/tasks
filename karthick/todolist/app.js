const express = require("express");
const app = express();
const port = 3000;
const knex = require("knex");
const axios = require("axios");
app.set("view engine", "ejs");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "karthick",
    password: "ruthra",
    database: "todolist",
  },
});

app.post("/insert", (req, res) => {
  const {tasks}=req.body;
  db("todo")
    .insert({ task:tasks})
    .returning("*")
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      res.status(400).json({ message: "unable to insert" });
    });
});

app.get("/", (req, res) => {
  db.select("*")
    .from("todo")
    .then((data) => {
      res.render("todo", { todos: data });
    })
    .catch((err) => res.status(400).json(err));
});

app.put("/com", (req, res) => {
  const { name, id } = req.body;
  if (name == "todo") {
    db("todo").where("id", "=", id).update("status", 1).returning("status")
  .then(task => {res.json(task[0])});
  } 
  else {
  db("todo").where("id", "=", id).update("status", 0)
  .returning("status")
  .then(task => {res.json(task[0])});
  }
  });


app.listen(port, () => {
  console.log("The running port is http://localhost:" + `${port}`);
});
