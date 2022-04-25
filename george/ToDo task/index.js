const express = require('express');
const app = express();
const port = 4040;
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
app.get('/',(req,res) =>{
    db.select('*').from('task').then(data =>{
        res.render('view',{todos:data});
    })
        .catch(err=> status (400).json(err));
    });
    app.post('/addtask',(req,res)=>{
    const {newtask}= req.body;
    db('todolist').insert({task:newtask}).returning('*')
    .then( _ =>{res.redirect('/');})
    .catch(err=>{
        res.status(400).json({message: "unable to create new task"});
    });
    });
    app.put('/moveTaskDone', (req, res) => {
        const { name, id } = req.body;
        if (name === 'todo') {
          db('task').where('id', '=', id).update('status',   1).returning('status')
        .then(task => {res.json(task[0])});
        } 
        else {
        db('task').where('id', '=', id).update('status', 0)
        .returning('status')
        .then(task => {res.json(task[0])});
        }
        });
        app.listen(port, () => {
            console.log("The running port is http://localhost:" + `${port}`);
          });


