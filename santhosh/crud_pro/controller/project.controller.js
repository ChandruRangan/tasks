const express = require('express');
const app = express();
const db = require('../models/Dbconfig')
const Project = require('../models/pro.model');
const router = express.Router();

router.get('/project', (req, res) => {
    res.render('project', {
        viewtitle: "Insert Project"
    });
})

router.post('/project', (req, res) => {
    const date = new Date(req.body.Psdate)
    const startdate = (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear() 
    const newdate = new Date(req.body.Pedate)
    const enddate = (newdate.getMonth()+1)+"/"+newdate.getDate()+"/"+newdate.getFullYear()
    var project = new Project();
    project.pro_name = req.body.pro_name;
    project.pro_lead = req.body.pro_lead;
    project.team_mem = req.body.team_mem;
    console.log(project.team_mem);
    project.Psdate = startdate;
    project.Pedate = enddate;
    project.save((err) => {
        if (!err) {
            console.log("Record inserted");
            res.redirect("/project");
        }
        else {
            console.log("Error during insertion: " + err);
        }
    })
});

router.get("/proupdate", (req, res) => {
    const id = req.query.id;
    Project.find({ _id: id },
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {

                res.render("proupdate", { proj: data, id: id });
            }
        })
});

router.put('/updata', (req, res) => {
    Project.updateOne({ _id: req.body.id }, req.body,(err, data) => {
        if (!err) {
            res.redirect('/prolist');
        }
        else {
            console.log(err);
        }
    })
})

router.get('/prolist', (req, res) => {
    Project.find((err, docs) => {
        if (!err) {
            res.render("prolist", {
                proj: docs
            })
        }
        else
            console.log('Error in retrieving project list: ' + err)
    })
});

router.post('/searche', (req, res) => {
    Project.find({$or:[
        {pro_name:{$regex:req.body.searche}},
        {pro_lead:{$regex:req.body.searche}},
        {team_mem:{$regex:req.body.searche}}
    ]},
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.render('prolist', { proj: data })
            }
        })
})

router.get("/deleted", (req, res) => {
    Project.findByIdAndDelete({ _id: req.query.id }, (e) => {
        if (!e) {
            res.redirect("/prolist");
        }
        else {
            req.send(e);
        }
    })
})
module.exports = router