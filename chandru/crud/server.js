require('./model/employee');
const express= require ('express');
 const path =require('path'); 
 const exphbs = require('express-handlebars');
 const bodyParser = require('body-parser') ;
const controller =require('./controller/employeecontroller');
let app=express();
app.use(bodyParser.urlencoded({
  extended:true 
}));
app.use(bodyParser.json());
/* app.get('/employee/list', (req, res) => {res.send('<h2> node to mongo</h2> click<a href="/employee/list">Employee Page</a>');
}); */
app.set('views',path.join(__dirname,'/views')); 
app.engine('hbs',exphbs.engine({ extname:'.hbs',defaultLayout:'mainLayout',runtimeOptions: {allowProtoPropertiesByDefault: true,allowProtoMethodsByDefault: true,},layoutsDir:__dirname+'/views/layouts/'}));
app.set('view engine','hbs') 
app.listen(4005,()=>{
console.log('start:4005');
});
app.use('/',controller);
