require('./model/employee');
const express= require ('express');
 const path =require('path'); 
 const exphbs = require('express-handlebars');
 const bodyParser = require('body-parser') ;
const controller =require('./controller/employeecontroller');
 const project= require('./controller/projectcontroller'); 
let app=express();
app.use(bodyParser.urlencoded({
  extended:false 
}));
app.use(bodyParser.json());
app.set('views',path.join(__dirname,'/views')); 
app.engine('hbs',exphbs.engine({ extname:'.hbs',defaultLayout:'mainLayout',runtimeOptions: {allowProtoPropertiesByDefault: true,},layoutsDir:__dirname+'/views/layouts/'}));
app.set('view engine','hbs') 
app.listen(4005,()=>{
console.log('start:4005');
});
app.use('/',controller);
 app.use('/',project); 