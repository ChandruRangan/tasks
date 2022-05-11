const express = require('express');
let router = express.Router();
const Employee = require('../model/schema')
router.get('/employee', (req, res) => {
    res.render("employee/create", {
        viewtitle: "insert Employee"
    });
});
router.post('/employee', (req,res) => {
    if (req.body._id == '')
    insertRecord(req, res);
    else
    updateRecord(req, res);
    });

function insertRecord(req, res) {
    const employee = new Employee();
    employee.FullName = req.body.FullName;
    employee.Email = req.body.Email;
    employee.Password = req.body.Password;
    employee.Phonenumber = req.body.Phonenumber;
    employee.JoinnigDate = req.body.JoinnigDate;
    employee.Dateofbirth = req.body.Dateofbirth;
    employee.save((err, doc) => {
        if (!err)
            res.redirect('/employee/list');
        else {
            console.log('error:' + err);
        }
    });
}
function updateRecord(req, res) {
    Employee.findOneAndUpdate({ _id: req.body._id }, req.body,  (err, doc) => {
        if (!err) { res.redirect('employee/list'); }
        else {
        if (err.name == 'ValidationError') {
        handleValidationError(err, req.body);
        res.render("employee/update", {
    viewtitle: "Update Employee",
    employee: req.body
    });
    }
    else
    console.log('Error during updating the record: ' + err);
    }
    });
    }
    function handleValidationError(err, body) {
        for (field in err.errors) {
        switch (err.errors[field].path) {
        case 'FullName':
        body['FullNameError'] = err.errors[field].message;
        break;
        default:
        break;
        }
        }
        }
router.get('/employee/list', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.render('employee/list', {
                list: docs
            });
        }
        else {
            console.log('error in :' + err);
        }
    });
});

 router.get('/employee/:_id', (req, res) => {
    Employee.findById(req.params._id, (err, doc) => {
        console.log(doc);
        if (!err) {
            res.render("employee/update", {
                viewtitle: "Update Employee",
                employee: doc
            });

        }
    });
});
router.get('/employee/delete/:_id', (req, res) => {
    Employee.findByIdAndRemove(req.params._id, (err, doc) => {
        console.log(doc);
    if (!err) {
    res.redirect('/employee/list');
    }
    else { console.log('Failed to Delete Course Details: ' + err); }
    });
    }); 
module.exports = router; 