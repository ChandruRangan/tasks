const express =require('express');
let r = express.Router();
const mongoose = require('mongoose');
const Employee =mongoose.model('Employee');
r.get('/employee',(req,res)=>{
    res.render("employee/config",{
        viewtitle:"insert Employee"
    });
});
r.post('/employee',(req,res)=>{
    insertRecord(req,res);   
    });

    function insertRecord(req,res){
    let employee =new Employee();
    employee.FullName=req.body.FullName;
    employee.Email=req.body.Email;
    employee.Password=req.body.Password;
    employee.Phonenumber=req.body.Phonenumber;
    employee.JoinnigDate=req.body.JoinnigDate;
    employee.Dateofbirth=req.body.Dateofbirth;
    employee.save((done,doc)=>{
    if(!done)
    res.redirect('/employee/list');
  /* if(err.name=='validationerror'){
        handleValidationError(err,req.body); 
        res.render("employee/config",{
       viewtitle:"Insert Employee",
       employee:req.body
        });
    } */
        else{   
        console.log('error:'+done);
    }
    });
    }
    r.get('/employee/list',(req,res)=>{
     /*     res.json('from list');   */ 
       Employee.find((err,docs)=>{
            if(!err){   
                res.render('employee/list',{
                list:docs
            });
            }
            else{
                console.log('error in :'+err);
            }
        });
    });
/*   function handleValidationError(err,body){
      for(field in err.errors){
          switch(err,erros[field].path){
              case  'FullName':
                  body['FullNameError']=err.errors[field].message;
                  break;
                  case  'Email':
                    body['EmailError']=err.errors[field].message;
                    break;
                    default:
                        break;
          }
      }
  } */
r.get('/:id',(req,res)=>{
Employee.findById(req.params.id,(err,doc)=>{
if(!err){
    res.render("employee/config",{
        viewtitle:"Update Employee",
        employee:doc
    });

}
});
});
module.exports =r; //module is a variable exports is a object exports use send  a value from  this file to another file(require./)access
