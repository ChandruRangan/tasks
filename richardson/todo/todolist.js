const express = require('express');
const app = express();
const knex=require('knex');
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended:true }));
app.set('view engine','ejs');

const db= knex({
    client:'postgresql',
    connection:{
        host:"localhost",
        user:"college",
        password:"college",
        database:"todolist",
    },
})

 app.post("/insert", (req, res) => {
    const {name}=req.body;
    db("todo").insert({ task:name}).returning("*")
    .then(_=> {
       res.redirect("/");
    }).catch(err => {
        res.status(400).json({ message: "unable to create a new task"});
    });
    
    });
    app.get('/',(req,res)=>{
        db.select('*')
        .from("todo")
        .then((data)=>{  
          res.render('todo',{data: data});
         })
         .catch(err => res.status(400).json(err));
      });
      app.put("/completedTaskDone", (req, res) => {
        const { name, id } = req.body;
        if (name === "todo") {
        db("task")
        .where("id", "=", id).update("status", 1)
        .returning("status").then(task => {res.json(task[0])})}
         else {
            db("task").where("id", "=", id).update("status", 0)
            .returning("status")
            .then(task => {res.json(task[0])});
        }
        });

app.listen(4000);

