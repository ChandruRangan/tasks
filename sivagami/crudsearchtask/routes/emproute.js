const express = require("express");
const { Db } = require("mongodb");
const { userInfo } = require("os");
const { Employee } = require("../model/EmpModel");  //import EmpModel
const { Project } = require("../model/ProjectModel");  //import ProjectModel
const app = express();
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")

require("dotenv").config();


module.exports = router;



//employee API
router.get("/", function (req, res) {
  res.render("Emp", { title: 'empdetails' });
});

// let JoinD = Employee.aggregate([{
//   "$project": {
//     "Joindate": { "$dateToString": { "format": "%m-%d-%y", "date": "$JoiningDate" } }}}])
   

router.post("/insert", (req, res) => {
  insertdata(req, res);
});
      async function insertdata(req, res) {
  console.log('inside func')
  const employee = new Employee();
  // const date=new Date(req.body.Joindate);
  // const Joindate=(date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear();
  // console.log(req.body.Joindate);
  //console.log(Joindate);
  
  // const encryptedPassword = await bcrypt.hash(req.body.pwd, 10);
    const dateb = new Date(req.body.DateOfBirth);
  const DateOfBirth = (dateb.getMonth() + 1) + '/' + dateb.getDate() + '/' + dateb.getFullYear();
  //  console.log(DateOfBirth);
  employee.FullName = req.body.FullName;
  employee.Email = req.body.email;
  const salt= await bcrypt.genSalt(10);
  const encryptedPassword =  await bcrypt.hash(req.body.pwd,salt);
  employee.Password =encryptedPassword ;
   console.log(encryptedPassword)
  employee.PhoneNumber = req.body.phoneno;
  employee.JoiningDate = req.body.Joindate;
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
 router.get('/dis',(req,res)=>{

  Employee.find((err,empdetails)=>{
      if(!err){
       res.render("Emptable",{employee:empdetails});
      }
      else{
       console.log(err);
      }
    });
   });

// router.get('/dis', (req, res) => {
//   Employee.find((err,empdetails)=>{
//           if(!err){
//            res.render("Emptable",{employee:empdetails});
//           }
//           else{
//            console.log(err);
//           }
//         });
       

//   let a = Employee.aggregate([{
//     "$project": {
//       "Joindate": { "$dateToString": { "format": "%m-%d-%y", "date": "$JoiningDate" } }
     
//     }
    
//   },])
  // console.log('Joindate')
  // console.log(a)
//})


//search API for Employee

router.post('/search', async (req, res) => {
  console.log(req.body.search);
  const data=req.body.search;
 await Employee.find(
    {
      "$or": [
        { FullName: { $regex: data } },
        { Email: { $regex: data} },
          // {PhoneNumber:{$regex:Number(data)}},
      ]
    })
    .then((data)=>{
      res.render("Emptable",{employee:data});
    })
    .catch((err)=>{
      res.json({message:err});
    });
  
});


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

// router.post("/update", (req, res) => {
//   console.log('INSERT', req.body);
//   updatedata(req, res);
// });

// function updatedata(req, res) {
//   console.log('inside fn');
//   console.log(req.query.id);
//   Employee.updateOne({ _id: req.query.id }, req.body, (err, doc) => {
//     console.log('inside fn');
//     if (!err) {
//       console.log('update')
//       res.redirect("/dis"), {
//         employee: doc
//       }
//     }
//     else
//       console.log(err, 'error in update'), { employee: req.body}
//   });
// }


router.post("/update", (req, res) => {
  console.log('INSERT', req.body);
  updatedata(req, res);
});

async function updatedata(req, res) {
  console.log('inside fn');
  console.log(req.query.id);
  if(req.query.id===req.params._id||req.body.FullName){
     console.log(req.params._id);
    if( req.body.pwd){
      console.log(req.body.pwd);
      try{
        const salt= await bcrypt.genSalt(10);
        const encryptedPassword =  await bcrypt.hash(req.body.pwd,salt);

      }catch(err){
        return res.status(500).json(err);
      }
    }
  try{
  Employee.updateOne({ _id: req.query.id }, req.body, (err, doc) => {
    console.log('inside fn');
    if (!err) {
      console.log('update')
      res.redirect("/dis"), {
        employee: doc
      }
    }
    else
      console.log(err, 'error in update'), { employee: req.body}
  });
}
  catch(err){
    return res.status(500).json(err);
  }}
else{
  return res.status(403).json("you can update only your account!");
}
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
router.get('/project', function (req, res) {

    Employee.find((err,empdetails)=>{
  console.log("siva")
    res.render('project', { title: 'projecttable',employee:empdetails });
});
});

// Db.projects.aggregate()
//                 .match({FullName: req.body.FullName })
//                 .lookup({ from: 'employees', localField: "FullName", foreignField: 'TeamMembers', as: 'Employeedetails' })

                // res.render('project', { title: 'projecttable',employee:empdetails });
               
//                 Employee.find({
//                FullName: "sivi"
// }).populate('FullName').exec((err, employee) =>{
//   if(err){
//      console.log(err)
//   }else{
//      console.log(FullName.ProjectLead.ProjectName)
//     //  res.render('project', { title: 'projecttable' ,employee:empdetails });  
               
//   }
// });

              //   try {
              //     const employee = Employee.create({
              //        FullName:"sivi",
              //        Email: "sivagami@gmail.com"
              //     })
               
              //     try {
              //        const pro= Project.create({
              //         ProjectName : "This is a first post",
              //         ProjectLead: "this a a first description",
              //           employeeid: Employee.id // assign the _id from the user
              //        });
              //     } catch (err) {
              //        console.log(err.message)
              //     }
              //  } catch (err) {
              //     console.log(err.message)
              //  }


              //  res.render('project', { title: 'projecttable' ,employee:empdetails });  
               
               
// });







//   Employee.find((err,empdetails)=>{
//   console.log("siva")
//     res.render('project', { title: 'projecttable',employee:empdetails });
// });
// });


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


// router.get('/proupdate', (req, res) => {
//   const id = req.query.id;
//   Employee.find((err,empdetails)=>{

//   Project.find({ _id: id }, (err, docs) => {
//     if (!err) {
//       res.render("proupdate", { project: docs, id: id ,employee:empdetails});
//     }
//   });
// });
// });


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








//search API for Project


router.post('/prosearch', async (req, res) => {
  
  const data=req.body.search;
 await Project.find(
    {
      "$or": [
        { ProjectName: { $regex: data } },
        { ProjectLead: { $regex: data} },
        { TeamMembers: { $regex: data} },
          // {PhoneNumber:{$regex:Number(data)}},
      ]
    })
    .then((data)=>{
      // let SEARCH=[docs]
      res.render("protable",{project:data});
    })
    .catch((err)=>{
      res.json({message:err});
    });
  
});


//search 

// router.get('/prosearch', async (req, res) => {
//   console.log(req.query.search)
//   let prodata = await Project.find(
//     {
//       "$or": [
//         { ProjectName: { $regex: req.query.search } },
//         { ProjectLead: { $regex: req.query.search } },
//          {PhoneNumber:{$regex:Number(req.query.search)}},
//       ]
//     })
//   res.send(prodata);
// })


//JWT  REGISTER---insert

// router.post("/register", async (req, res) => {

//       const salt= await bcrypt.genSalt(10);

//     const encryptedPassword =  await bcrypt.hash(req.body.pwd,salt);

// })
   
//JWT LOGIN

router.get("/login",(req,res)=>{
  res.render("login",{title:'loginpage'});
});

// router.post("/login", async (req, res) => {

//   try {
//     // Get user input
//     const { email, pwd } = req.body;

//     const user = await Employee.findOne({Email:req.body.email });
//     console.log(user);
//     const passwd = await Employee.findOne({Email: req.body.email}, {"Password":1});
//     console.log(passwd);

//     // Validate user input
//     if (!(user && passwd)) {
//       res.status(400).send("All input is required");
//     }

//      // Validate if user exist in our database
  
//    if (user && (await bcrypt.compare(pwd, user.Password))) {
//       // Create token


//       // let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
//  // const jwtSecretKey = process.env.JWT_SECRET_KEY;
// //console.log(process.env.JWT_SECRET_KEY)
//       const token = jwt.sign(
//         { user_id: user._id, email},
//         "secret",
//         {
//           expiresIn: "2h",
//         }
//       );
//       console.log(token)

//      //  const token = jwt.sign(user,passwd, jwtSecretKey,{expiresIn:"2h",});

//       // save user token
//     user.token = token;

//     // user
//     // res.status(200).json(user);
//     res.redirect("/");
//   }
//   else res.status(400).send("Invalid Credentials");
// } catch (err) {
//   console.log(err);
// }
// });

router.post("/login", async (req, res) => {

  try {
    // Get user input
    const { email, pwd } = req.body;

    // const user = await Employee.findOne({Email:req.body.email });
    // console.log(user);
    const user= await Employee.findOne({Email: req.body.email}, {"Password":1});
    console.log(user);

    // Validate user input
    if (!( user)) {
      res.status(400).send("All input is required");
    }

     // Validate if user exist in our database
  
   if ( await bcrypt.compare(pwd, user.Password)) {
      // Create token


      // let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
 // const jwtSecretKey = process.env.JWT_SECRET_KEY;
//console.log(process.env.JWT_SECRET_KEY)
      const token = jwt.sign(
        { user_id: user._id, email},
        "secret",
        {
          expiresIn: "2h",
        }
      );
      console.log(token);

     //  const token = jwt.sign(user,passwd, jwtSecretKey,{expiresIn:"2h",});

      // save user token
    user.token = token;

    // user
    // res.status(200).json(user);
    res.redirect("/");
  }
  else res.status(400).send("Invalid Credentials");
} catch (err) {
  console.log(err);
}
});




//JWT generate TOKEN

router.post("/user/generateToken",async (req, res) => {
  // Validate User Here
  // Then generate JWT Token

  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  const data = {
     Password:encryptedPassword,
     Email:req.body.email,
   }

  const token = jwt.sign(data, jwtSecretKey,{expiresIn:"2h",});
//  user.token=token;
  res.send(token);
});

// router.get("/user/validateToken", (req, res) => {
//   // Tokens are generally passed in the header of the request
//   // Due to security reasons.

//   let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
//   let jwtSecretKey = process.env.JWT_SECRET_KEY;

//   try {
//     const token = req.header(tokenHeaderKey);

//     const verified = jwt.verify(token, jwtSecretKey);
//     if(verified){
//       return res.send("Successfully Verified");
//     }else{
//       // Access Denied
//       return res.status(401).send(error);
//     }
//   } catch (error) {
//     // Access Denied
//     return res.status(401).send(error);
//   }
// });


// //JWT TOKEN EMPLOYEE

// router.post("/register", async (req, res) => {
//   try {
//     // Get user input
//     const {  email, password } = req.body;

//     //Encrypt user password


//     const salt= await bcrypt.genSalt(10);

//     const encryptedPassword =  await bcrypt.hash(req.body.pwd,salt);
   
//     // const encryptedPassword = await bcrypt.hash(password, 10);

//     // Create user in our database
//     const user = await Employee.create({
//     //   Email: email.toLowerCase(), // sanitize: convert email to lowercase
//     //   Password: encryptedPassword,
//     // });


    

//     Password:encryptedPassword,
//      Email:req.body.email,

//   });

//     // Create token
//     const token = jwt.sign(
//       { Employee_id: Employee._id, email },
//       process.env.TOKEN_KEY,
//       {
//         expiresIn: "2h",
//       }
//     );
//     // save user token
//     Employee.token = token;

//     // return new user
//     res.status(201).json(Employee);
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.post("/login", async (req, res) => {
//   try {
//     // Get user input
//     const { email, password } = req.body;


//     // Validate user input
//     if (!(email && password)) {
//       res.status(400).send("All input is required");
//     }
//     // Validate if user exist in our database
//     const user = await Employee.findOne({ email });

//     if (Employee && (await bcrypt.compare(password, user.password))) {
//       // Create token
//       const token = jwt.sign(
//         { Employee_id: Employee._id, email },
//         process.env.TOKEN_KEY,
//         {
//           expiresIn: "2h",
//         }
//       );

//       // save user token
//       Employee.token = token;

//       // user
//       res.status(200).json(Employee);
//     }
//     res.status(400).send("Invalid Credentials");
//   } catch (err) {
//     console.log(err);
//   }
// });



// const auth = require("./middleware/auth");

// router.post("/welcome", auth, (req, res) => {
// res.status(200).send("Welcome 🙌 ");
// });


    


 















