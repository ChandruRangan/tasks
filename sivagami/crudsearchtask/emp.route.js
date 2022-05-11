const express = require("express");
const { Db } = require("mongodb");
const { Employee } = require("./model/EmpModel");  //import EmpModel
const { Project } = require("./model/ProjectModel");  //import ProjectModel
const app = express();
const router = require('express').Router();


//employee API
router.get("/", function (req, res) {
  res.render("Emp", { title: 'empdetails' });
});

let JoinD = Employee.aggregate([{
  "$project": {
    "Joindate": { "$dateToString": { "format": "%m-%d-%y", "date": "$JoiningDate" } }}}])
   

router.post("/insert", (req, res) => {
  insertdata(req, res);
});
function insertdata(req, res) {
  console.log('inside func')
  const employee = new Employee();
  // const date=new Date(req.body.Joindate);
  // const Joindate=(date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear();
  // console.log(req.body.Joindate);
  //console.log(Joindate);
  
  
  const dateb = new Date(req.body.DateOfBirth);
  const DateOfBirth = (dateb.getMonth() + 1) + '/' + dateb.getDate() + '/' + dateb.getFullYear();
  //  console.log(DateOfBirth);
  employee.FullName = req.body.FullName;
  employee.Email = req.body.email;
  employee.Password = req.body.pwd;
  employee.PhoneNumber = req.body.phoneno;
  employee.JoiningDate = JoinD;
  employee.DateofBirth = req.body.DateOfBirth;

  employee.save((err) => {
    // console.log('error', err);
    if (!err)
      res.redirect("/");
    else
      console.log('error' + err);
  });
};

//display employeetable
//  router.get('/dis',(req,res)=>{

//   Employee.find((err,empdetails)=>{
//       if(!err){
//        res.render("Emptable",{employee:empdetails});
//       }
//       else{
//        console.log(err);
//       }
//     });
//    });

router.get('/dis', (req, res) => {
  Employee.find((err,empdetails)=>{
          if(!err){
           res.render("Emptable",{employee:empdetails});
          }
          else{
           console.log(err);
          }
        });
       

  let a = Employee.aggregate([{
    "$project": {
      "Joindate": { "$dateToString": { "format": "%m-%d-%y", "date": "$JoiningDate" } }
     
    }
    
  },])
  // console.log('Joindate')
  // console.log(a)
})


//update Employee ApI

router.get('/update', (req, res) => {
  console.log('ironman')
  const id = req.query.id;
  Employee.find({ _id: id }, function (err, docs) {
    if (!err) {
      console.log('spider')
      res.render("Empupdate", { employee: docs, id: id });
    }
    else (err)
    console.log(err);

  });
});

router.post("/update", (req, res) => {
  console.log('INSERT', req.body);
  updatedata(req, res);
});

function updatedata(req, res) {
  console.log('inside fn');
  console.log(req.query.id);
  Employee.updateOne({ _id: req.query.id }, req.body, (err, doc) => {
    console.log('inside fn');
    if (!err) {
      console.log('update')
      res.redirect("/dis"), {
        employee: doc
      }
    }
    else
      console.log(err, 'error in update'), {
        employee: req.body
      }
  });
}


//delete Employee API

router.get("/delete", (req, res) => {
  console.log('delete')
  Employee.findByIdAndDelete({ _id: req.query.id }, (err) => {
    console.log("deleteone")
    if (!err) {
      console.log('always delete')
      res.redirect('/dis');
    }
    else {
      console.log("cannot delete" + err);
    }
  })

})


//Project API


router.post("/proinsert", (req, res) => {
  console.log("sivagami")

  insertproject(req, res);
});
function insertproject(req, res) {
  console.log("insidefnc")
  const project = new Project();
  // const dateS = new Date(req.body.startDate);
  // const startDate = (dateS.getMonth() + 1) + '/' + dateS.getDate() + '/' + dateS.getFullYear();
  project.ProjectName = req.body.PN;
  project.ProjectLead = req.body.PL;
  project.TeamMembers = req.body.TM;
  console.log(req.body)
  project.ProjectstartDate = req.body.startDate;
  project.ProjectEndDate = req.body.endDate;
  project.save((err, doc) => {
    if (!err)
      res.redirect("/project");
    else
      console.log('error', err);
  });

};

// router.post('/find',(req,res)=>{
//   console.log("inside")
//   Teammemberinsert(req,res);
// });
// function Teammemberinsert(req,res){
//   console.log("Team")
//   const employee = new Employee();

//   // const TeamMembers=req.body.TM;
//   employee.find((err,empdetails)=>{
//     console.log("sivi")
//     if(!err){
//       console.log("hi")
//       // res.send({employee:empdetails});
//      console.log(empdetails)
//      console.log("hello")
//     }
//     else{
//       console.log(err);
//      }
//   });
//   };

//teammembers

// router.post('/find',(req,res)=>{
//   Teammemberinsert(req,res);
// });
// function Teammemberinsert(req,res){
//   const employee = new Employee();

//   // const TeamMembers=req.body.TM;
//   employee.find((err,empdetails)=>{
//     if(!err){
//       console.log("hi")
//       res.send({employee:empdetails});
//      console.log(empdetails)
//      console.log("hello")
//     }});
//   };






//display projecttable
router.get('/prodis', (req, res) => {
  Project.find((err, projectdetails) => {
    if (!err) {
      res.render("protable", { project: projectdetails });
    }
    else {
      console.log(err);
    }
  });
});

// update Project API

router.get('/proupdate', (req, res) => {
  const id = req.query.id;
  Project.find({ _id: id }, (err, docs) => {
    if (!err) {
      res.render("proupdate", { project: docs, id: id });
    }
  });
});

router.post("/updated", (req, res) => {
  console.log('INSERT', req.body);
  Projectupdate(req, res);
});


function Projectupdate(req, res) {
  console.log('inside fn');
  const id = req.query.id;
  Project.updateOne({ _id: req.query.id }, req.body, (err, doc) => {
    console.log('inside fn');
    if (!err) {
      console.log('update')
      res.redirect("/prodis"), {
        project: doc
      }
    }
    else
      console.log(err, 'error in update'), {
        project: req.body
      }
  });
}

//delete Project API

router.get("/prodelete", (req, res) => {
  console.log('inside fn')
  Project.findByIdAndRemove({ _id: req.query.id }, (err, doc) => {
    console.log('delete')
    if (!err) {
      res.redirect('/prodis');
    }
    else {
      console.log('cannot delete' + err);
    }
  })
})




//search API

// router.get('/search/:key',(req,res)=>{
//   console.log(req.params.key)
//   res.send('search done');
// })

router.get('/search', async (req, res) => {
  console.log(req.query.search)
  let data = await Employee.find(
    {
      "$or": [
        { FullName: { $regex: req.query.search } },
        { Email: { $regex: req.query.search } },
        //  {PhoneNumber:{$regex:(req.query.search)}},
      ]
    })
  res.send(data);
})

// router.post("/login",async(req,res)=>{
//   try{
//     const emp=await Employee.findOne({Email:req.body.email});
//     !emp && res.status(404).json("Employee not found");

//     const validPassword=await bcrypt.compare(req.body.Password);

//   }
// })

router.get('/prosearch', async (req, res) => {
  console.log(req.query.search)
  let prodata = await Project.find(
    {
      "$or": [
        { ProjectName: { $regex: req.query.search } },
        { ProjectLead: { $regex: req.query.search } },
        //  {PhoneNumber:{$regex:(req.query.search)}},
      ]
    })
  res.send(prodata);
})










//   Project.aggregate()
//                 .match({FullName: req.query.FullName })
//                 .lookup({ from: 'Employee', localField: "FullName", foreignField: 'ProjectName', as: 'Employeedetails' })
// .exec()
// .then((TeamMembers) => { console.log(TeamMembers) })
// .catch((err) => { console.log(err) });
// res.render("team", { employee: docs, id: id });



//join 













module.exports = router;





