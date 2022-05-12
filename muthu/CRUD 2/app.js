const express = require("express");
const app = express();
const port = 4500;
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const knex = require("knex");
const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "muthus",
    password: "muthu@904743",
    database: "employee",
},
});
app.get("/", (req, res) => {
  db.select("*").from("project")
    .then((data) => {
      res.render("index");
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
});
app.post("/insertemp", (req, res) => {
  const fname = req.body.fullname;
  const email = req.body.email;
  const pwd = req.body.password;
  const phno = req.body.phone;
  const jdate = req.body.doj;
  const dob = req.body.dob;
  db("employee")
    .insert({
      fullname: fname,
      email: email,
      password : pwd,
      phone_number : phno,
      joiningdate : jdate,
      date_of_birth : dob,
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
});

app.post("/insertpro", (req, res) => {
  const proname = req.body.proname;
  const prolead = req.body.prolead;
  const sdate = req.body.sdate;
  const edate = req.body.edate;
  db("project")
    .insert({
      projectname: proname,
      projectlead: prolead,
      project_start_date : sdate,
      project_end_date : edate,
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
});
app.get("/display", (req, res) => {
  db.select("*").from("employee")
    .then((data) => {
      db.select("*").from("project")
      .then((project)=>{
        res.render("display", { employee: data ,project:project});
      })
    })
    .catch((err) => {
      res.json({ message: err });
    });
});
app.get("/deleteEmp",async(req,res)=>{
const  id  = parseInt(req.query.id);
console.log(id);
await db("employee")
  .where("employee_id", id)
  .del()
  .then(() => {
      res.redirect('/');
  }).catch(err=>{
      res.status(400).json(err);
  });
});

app.get("/deletePro",async(req,res)=>{
  const  id  = parseInt(req.query.id);
  console.log(id);
  await db("project")
    .where("project_id", id)
    .del()
    .then(() => {
        res.redirect('/');
    }).catch(err=>{
        res.status(400).json(err);
    });
  });
app.get("/updateEmp",async(req,res)=>{
    const  id  = parseInt(req.query.id);
    console.log(id);
     await db("employee")
        .select('*')
       .where("employee_id", id).returning('*')
   
      .then((data) => {
          
        data[0].joiningdate=  dteconfig(data[0].joiningdate)
        data[0].date_of_birth=  dteconfig(data[0].date_of_birth)
          res.render('updateemp',{emp:data});
      }).catch(err=>{
          res.status(400).json(err);
      });
    
    });

app.get("/updatePro",async(req,res)=>{
  const  id  = parseInt(req.query.id);
  console.log(id);
   await db("project")
      .select('*')
     .where("project_id", id).returning('*')
 
    .then((data) => {
        console.log(data)
      data[0].project_start_date=  dteconfig(data[0].project_start_date)
      data[0].project_end_date=  dteconfig(data[0].project_end_date)
        res.render('updatepro',{pro:data});
    }).catch(err=>{
        res.status(400).json(err);
    });
  
  });

app.post("/searchemp", (req, res) => {
  var input = req.body.input;
  console.log(input);
  if(input==''){
    res.redirect('/display');
  }
  else{
    db("employee")
    .select("*")
    .where("employee.fullname",input)
      .then((data) => {
        console.log(data)
        res.render("searchemp",  { employee: data });
      })
      .catch((err) => {
        console.log(err)
        res.json({ message: err });
      });
    }
  });

// Select Specific Character

app.post("/searchemp", (req, res) => {
  var input = req.body.input;
  console.log(input);
  if(input==''){
    res.redirect('/display');
  }
  else{
    db("employee")
    .select("*")
    .from("employee")
    .where("employee.fullname")
    .like("A%",input)
      .then((data) => {
        console.log(data)
        res.render("searchemp",  { employee: data });
      })
      .catch((err) => {
        console.log(err)
        res.json({ message: err });
      });
    }
  });

//



  app.post("/searchpro", (req, res) => {
  var input = req.body.input;
  if(input==''){
    res.redirect('/display');
  }
  else{
    db("project")
    .select("*")
    .where("project.projectname",input)
      .then((data) => {
        console.log(data)
        res.render("searchpro",  { project: data });
      })
      .catch((err) => {
        console.log(err)
        res.json({ message: err });
      });
    }
  });
  app.listen(port, () => {
  console.log(`Running Server is http://localhost:${port}`);
});
app.post('/updatedemp',async(req,res)=>{
        const {id, fullname,email,password,dob,doj}  =req.body
        console.log(req.body);
     db('employee').where('employee_id',id).update({fullname:fullname,email:email,password
    :password,joiningdate:doj,date_of_birth:dob}).returning('*').then((data)=>{
      console.log(data);
      res.redirect('/display')
    })
})
app.post('/updatepro',async(req,res)=>{
  const {id, proname,prolead,sdate,edate}  =req.body
  console.log(req.body);
db('project').where('project_id',id).update({projectname:proname,projectlead:prolead,
  project_start_date:sdate,project_end_date:edate})
  .returning('*').then((data)=>{
    console.log(data)
res.redirect('/display')
})
})
function dteconfig(date){
  return  date.toISOString().replace(/T/, ' ').replace(/\..+/, '').toString().substr(0,10)
}