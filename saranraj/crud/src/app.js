const express = require('express');
const cors = require('cors');

const app = express();
app.set('view engine','ejs');

// ==> Rotas da API:
const index = require('./routes/index.js');
 const productRoute = require('./routes/productroutes.js');
const { db } = require('./config/database.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/', productRoute);
app.get('/', (req, res) => { 
    db.select('*').from('product').then((data) => {
      res.render('index', { elements: data });
    }).catch(err => res.status(400).json(err));
   });
 app.get('/insert', (req, res) => { 
       db.select('*').from('categories').then((data)=>{
        res.render('insert',{elements:data});
       }).catch(err => res.status(400).json(err));
      
    });
   



module.exports = app;