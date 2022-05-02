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
  db.select("*")
    .from("project")
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
      db.select("*").from("project").then((project)=>{
        res.render("display", { employee: data ,project:project});
      })
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

app.get("/update", (req, res) => {
  res.render("update");
});
app.post("/search", (req, res) => {
  var input = req.body.input;
  if(input==''){
    res.redirect('/display');
  }
  else{
    db("Project as p").join("Project as c", "p.employee_id", "c.employee_id").where("c.fullname", input)
    .select(
      "p.employee_id",
      "p.fullname",
      "c.email",
      )
      .then((data) => {
        res.render("display",  { project: data });
      })
      .catch((err) => {
        res.json({ message: err });
      });
    }
  });
  app.post("/search", (req, res) => {
    var input = req.body.input;
    if(input==''){
      res.redirect('/display');
    }
    else{
    db("Employee as p").join("Employee as c", "p.project_id", "c.project_id").where("c.category_name", input)
      .select(
        "p.project_id",
        "p.projectname",
        "c.projectlead",
        )
        .then((data) => {
          res.render("display",  { employee: data });
        })
        .catch((err) => {
          res.json({ message: err });
        });
      }
    });
app.listen(port, () => {
  console.log(`Running Server is http://localhost:${port}`);
});
