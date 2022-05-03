const express = require('express');
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended:true }));
app.set('view engine','ejs');
app.use(bodyparser.json());
const Employee = require('./models/emp.model');
const db = require('./models/Dbconfig')

app.get('/',(req,res)=>{
      res.render('Emp', {
          viewtitle:"Insert Employee"
      });
     })

app.post('/insert',(req, res) => {
    req.body._id == ''
    insertRecord(req, res);
   
});

function insertRecord(req, res){
    var employee = new Employee();
    employee.full_name = req.body.full_name;
    employee.email = req.body.email;
    employee.password = req.body.password;
    employee.phonenumber = req.body.phonenumber;
    employee.joiningdate = req.body.joiningdate;
    employee.dateofbirth = req.body.dateofbirth;
    employee.save((err, doc) => {
        if(!err){
            console.log("Record inserted");
            res.redirect("/");
        }
        else{
            console.log('Error during insertion: '+ err);
        }
    })

}
app.get('/list', (req, res) => {
    Employee.find((err, docs) => {
        if(!err){
            res.render("list", {
                emp: docs
            });
        }
        else 
        console.log('Error in retrieving emp list: ' + err)
    })
});


app.listen(2000, () => {
    console.log(`The running port is http://localhost:2000`)
});

