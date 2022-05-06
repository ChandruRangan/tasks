const express = require('express');
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended:true }));
app.set('view engine','ejs');
app.use(bodyparser.json());
const Employee = require('./models/emp.model');
const db = require('./models/Dbconfig')
const Project = require('./models/pro.model')

app.get('/',(req,res)=>{
      res.render('Emp', {
          viewtitle:"Insert Employee"
      });
     })

app.get('/project', (req,res)=> {
    res.render('project',{
        viewtitle:"Insert Project"
    });
})

app.post('/insert',(req, res) => {
    insertrecord(req, res);
   
});

function insertrecord(req, res){
    const empdate = new Date(req.body.joiningdate);
    const jdate = (empdate.getMonth()+1)+'-'+empdate.getDate()+'-'+empdate.getFullYear()
    const date = new Date(req.body.dateofbirth);
    const bdate = (date.getMonth()+1)+'-'+date.getDate()+'-'+date.getFullYear()
    const employee = new Employee();
    employee.full_name = req.body.full_name;
    employee.email = req.body.email;
    employee.password = req.body.password;
    employee.phonenumber = req.body.phonenumber;
    employee.joiningdate = jdate;
    employee.dateofbirth = bdate;
    employee.save((err) => {
        if(!err){
            console.log("Record inserted");
            res.redirect("/");
        }
        else{
            console.log('Error during insertion: '+ err);
        }
    })

}
app.post('/project', (req,res)=>{
    insertRecord(req, res);
});

function insertRecord(req,res){
    const date = new Date(req.body.Psdate);
    const Pdate = (date.getMonth()+1)+'-'+date.getDate()+'-'+date.getFullYear()
    const edate = new Date(req.body.Pedate)
    const Edate = (edate.getMonth()+1)+'-'+edate.getDate()+'-'+date.getFullYear()
    var project = new Project();
    project.pro_name = req.body.pro_name;
    project.pro_lead = req.body.pro_lead;
    project.team_mem = req.body.team_mem;
    project.Psdate = Pdate;
    project.Pedate = Edate;
    project.save((err) => {
        if(!err){
            console.log("Record inserted");
            res.redirect("/project");
        }
        else{
            console.log("Error during insertion: " + err);
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
app.get('/prolist', (req, res) => {
    Project.find((err, docs) => {
        if(!err){
            res.render("prolist", {
                proj : docs
            })
        }
        else
        console.log('Error in retrieving project list: ' + err)
    })
});

app.post('/search', (req, res)=>{
    Employee.find({full_name:req.body.search},
        function(err, data){
            if(err){
                console.log(err);
            }
            else{
                res.render("list", {emp: data});
                // console.log(data);
            
            }
        }) 

    
})
app.post('/searche', (req, res) => {
    Project.find({pro_name:req.body.searche},
        function(err, data){
            if(err){
                console.log(err);
            }
            else{
                res.render('prolist', {proj: data})
            }
        })
})

app.get("/delete",(req,res)=>{
Employee.findByIdAndDelete({_id:req.query.id},(e)=>{
    if(!e){
        res.redirect("/list");
    }
    else{
        res.send(e);
    }
});
}); 
app.get("/deleted", (req,res) => {
    Project.findByIdAndDelete({_id:req.query.id}, (e) => {
        if(!e){
            res.redirect("/prolist");
        }
        else{
            req.send(e);
        }
    })
})

app.listen(2000, () => {
    console.log(`The running port is http://localhost:2000`)
});

