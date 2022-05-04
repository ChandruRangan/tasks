const express = require("express");
const { Db } = require("mongodb");
const { Employee } = require("./model/EmpModel");
const app = express();
const router = require('express').Router();

// router.get('/', function (req, res) {
//   res.json({
//       status: 'API Its Working',
//       message: 'Welcome to RESTHub crafted with love!'
//   });
// });

router.get('/',function(req,res){
//Db.CRUDtask.find({});
  //console.log("yes");
  res.render('cruds',{title:'CRUDtask'});
  
});

router.post("/insert",(req,res)=>{

  req.body._id == ''
    insertrecord(req, res);
});
function insertrecord(req, res){
    const employee = new Employee();
    employee.FullName = req.body.FullName;
    employee.Email = req.body.email;
    employee.Password = req.body.pwd;
    employee.PhoneNumber= req.body.phoneno;
    employee.JoiningDate = req.body.Joindate;
    employee.DateofBirth = req.body.DOB;


  //  var Empdetails= new Employee({
  //  fn:req.body.FN,
  //  e:req.body.email,

  //  Pd:req.body.Pwd,
  //  phn:req.body.phoneno,
  //  Jd:req.body.Joindate,
  //  dob:req.body.DOB
  //  });

   employee.save((err,doc)=>{
     if(!err)
     res.render('');
     else
     console.log('error', err);
   });
  };

//    .then(()=>{
//   console.log("inserted");
//   res.redirect("/");
// })
// .catch((err)=>{
//   res.status(400).json({message:err});
// })
//});

 
module.exports=router;





// import Employee controller

//var Empcontroller = require('./Empcontroller');

// Employee routes

// router.route('/Emptable')
// .get(Empcontroller.new)
// .post(Empcontroller.app);


// router.post()

// router.route('/Emptable')
// .get(Empcontroller.view);
// .patch(Empcontroller.update)
// .put(Empcontroller.update)
// .delete(Empcontroller.delete);
