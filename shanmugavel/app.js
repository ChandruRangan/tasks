const express = require('express')
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.set('view engine','ejs');
const employee=require('../controller/employee');
app.post('/empinsert',employee.employeeinsert);
// app.delete('/empinsert',employee.employeedelete);
// app.get('/',employee.listemployee);
app.get('/insert',async(req,res)=>{
    res.render('insert')
  });

// app.post('/insert',db.insert);





 module.exports = app;