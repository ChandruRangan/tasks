const express = require('express');
const app = express();
const mongoose=require('mongoose');
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended:true }));
app.set('view engine','ejs');
app.use(bodyparser.json());
const Employee = mongoose.model('empModel');


app.get('/',(req,res)=>{
      res.render('Emp', {
          viewtitle:"Insert Employee"
      });
     })

app.post('/',(req,res) => {
    req.body._id == ''
    insertRecord(req, res);
    
})
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
        }
        else{
            console.log('Error during insertion: '+ err);
        }
    })

}

app.listen(2000, () => {
    console.log(`The running port is http://localhost:2000`)
});

