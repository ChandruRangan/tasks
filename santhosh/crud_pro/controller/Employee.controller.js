const express = require('express');
const app = express();
const Employee = require('../models/emp.model');
const db = require('../models/Dbconfig')
const router = express.Router();


router.get('/', (req, res) => {
    res.render('Emp', {
        viewtitle: "Insert Employee"
    });
})

router.post('/insert', (req, res) => {
    const date = new Date(req.body.joiningdate);
    const jdate = (date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear()
    const dob = new Date(req.body.dateofbirth);
    const dobdate =(dob.getMonth()+1)+'/'+dob.getDate()+'/'+dob.getFullYear()
    let employee = new Employee()
    employee.full_name = req.body.full_name;
    employee.email = req.body.email;
    employee.password = req.body.password;
    employee.phonenumber = req.body.phonenumber;
    employee.joiningdate = jdate;
    employee.dateofbirth = dobdate;
    employee.save((err) => {
        if (!err) {
            console.log("Record inserted");
            res.redirect("/");
        }
        else {
            console.log('Error during insertion: ' + err);
        }
    })
    
});

router.get("/update", (req, res) => {
    const id = req.query.id;
    Employee.find({ _id: id },
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("update", { emp: data, id: id });
            }
        })
});
router.post('/updatedata', (req, res) => {
    Employee.updateOne({ _id: req.query.id }, req.body, (err, data) => {
        if (!err) {
            res.redirect("/list");
        }
        else {
            console.log(err);
        }
    })
})
router.get('/list', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.render("list", {
                emp: docs
            });
        }
        else
            console.log('Error in retrieving emp list: ' + err)
    })
});
router.post('/search', (req, res) => {
    Employee.find({ full_name: req.body.search },
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("list", { emp: data });
            
            }
        })
})
router.get("/delete", (req, res) => {
    Employee.findByIdAndDelete({ _id: req.query.id }, (e) => {
        if (!e) {
            res.redirect("/list");
        }
        else {
            res.send(e);
        }
    });
});

module.exports = router