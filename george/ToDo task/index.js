const express = require('express');
const app = express();
const port = 4044;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine","ejs");
const knex = require('knex');
//connecting our db
const db = knex({
    client: 'pg',
    connection: {
        host: "localhost",
        user: "george",
        password: 123,
        database: 'todo'
    }
});
 //using post we get the task we need to do.we insert it in db 
    //and redirect the page to '/'.
app.post("/insert",(req,res)=>{
    const {newtask}= req.body;
    db("todolist").insert({task:newtask})
    .then(()=>
        {res.redirect("/");})
    .catch(err=>{
        res.status(400).json({message: "unable to create new task"});
    });
    });
//the task we got from the put() is shown using the get() from the db in which we 
//stored the data(task)
app.get("/",(req,res) =>{
    db.select("*").from("todolist").then(data =>{
        res.render("view",{todos:data});
    })
        .catch(err=> {req.status(400).json(err)});
    });
    //using this put() we add the task to the  completed task by clicking the
    // the checkbox. 
app.put("/moveTaskDone", (req, res) => {
        const { name, id } = req.body;
        if (name === "todo") {
          db("task").where("id", "=", id).update("status", 1).returning("status")
        .then(task => {res.json(task[0])});
        } 
        else {
        db("task").where("id", "=", id).update("status", 0)
        .returning("status")
        .then(task => {res.json(task[0])});
        }
        });
        app.listen(port, () => {
            console.log("The running port is http://localhost:" + `${port}`);
          });


