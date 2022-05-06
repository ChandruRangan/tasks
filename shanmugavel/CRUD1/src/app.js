const express = require('express')
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.set('view engine','ejs');
const employee=require('../controller/employee');
app.post('/empinsert',employee.employeeinsert);                      //func.clss           //api handling fe.req  be.han
// app.delete('/empinsert',employee.employeedelete);
app.get('/',employee.listemployee);
app.get('/insert',async(req,res)=>{
    res.render('insert')
  });
app.post('/search',employee.empsearch);
app.get('/delete',employee.empdelete);

// app.post('/insert',db.insert);





 module.exports = app;