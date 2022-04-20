const express = require('express'); 
const kenx = require('knex');
const bodyParser = require("body-parser");

const db = kenx({
    client: 'pg',  // postgres
    connection: {
    host: 'localhost',
    user: 'saran',
    password: 'Saran@123',
    database: 'js'
    }
    });
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static("public"));


//route to the root 
app.get('/', (req, res) => { 
    db.select('*').from('task').then(data => {
      res.render('index', { todos: data });
    }).catch(err => res.status(400).json(err));
   });



app.post('/addTask', (req, res) => {
    const  {textTodo}  = req.body;
    console.log(req.body);
    db('task').insert({ task: textTodo} ).returning('*')
    .then(()=> {
       res.redirect('/');
    }).catch((err) => {
        res.status(400).json({ message: 'unable to create a new task'
       });
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
app.listen(8081);