const express = require('express');
const app = express();
const Employee = require('../models/emp.model');
const db = require('../models/Dbconfig')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const alert = require('alert');
const bcryptjs = require('bcryptjs');

router.get('/login', (req, res) => {
    res.render('login',{

    })
})

router.post('/login', async(req, res) => {
    const user = await Employee.findOne({email: req.body.email});
   
    const pwd = await Employee.findOne({email: req.body.email}, {"password":1})
    

    try{
        const match = await bcryptjs.compare(req.body.pwd, pwd.password);
        
        const accessToken = jwt.sign(JSON.stringify(user), process.env.TOKEN_SECRET)
        if(match){
            
            res.json({accessToken: accessToken});
        }else{
            res.json({message:"Invalid Credentials"});
        }
    }catch(e){
        console.log(e)
    }
});

router.get('/', (req, res, ) => {
    res.render('Emp', {
    });
})

router.post('/insert', async(req, res, ) => {
    const date = new Date(req.body.joiningdate);
    const jdate = (date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear()
    const dob = new Date(req.body.dateofbirth);
    const dobdate =(dob.getMonth()+1)+'/'+dob.getDate()+'/'+dob.getFullYear()
    let employee = new Employee()
    employee.full_name = req.body.full_name;
    employee.email = req.body.email;
    let hashedPassword = await bcryptjs.hash(req.body.password, 10);
    employee.password = hashedPassword;
    employee.phonenumber = req.body.phonenumber;
    employee.joiningdate = jdate;
    employee.dateofbirth = dobdate;
    employee.save((err) => {
        if (!err) {
            alert("Employee Created succesfully")
            console.log("Record inserted");
            res.redirect("/");
        }
        else {
            console.log('Error during insertion: ' + err);
        }
    })
    
});

router.get("/update", (req, res, ) => {
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
router.post('/updatedata',  (req, res, ) => {
    Employee.updateOne({ _id: req.query.id }, req.body, (err, data) => {
        if (!err) {
            res.redirect("/list");
            alert("Employee updated successfully")
        }
        else {
            console.log(err);
        }
    })
})
router.get('/list',  (req, res, ) => {
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
router.post('/search', (req, res, ) => {
    Employee.find({
        $or:[
            {full_name:{$regex:req.body.search}},
            {email:{$regex:req.body.search}},
            {phonenumber:{$regex:req.body.search}}
        ]
    },
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("list", { emp: data });
            
            }
        })
})
router.get("/delete",  (req, res, ) => {
    Employee.findByIdAndDelete({ _id: req.query.id }, (e) => {
        if (!e) {
            res.redirect("/list");
            alert("Employee deleted successfully")
        }
        else {
            res.send(e);
        }
    });
});
// router.delete("/delete", async(req,res)=> {
//     const id=req.body.id
//     await Employee.findById(id)
//     .then(user => user.remove())
//     .then(user => 
//         res.status(200).json({message: "User successfully deleted", user})) 
// })

module.exports = router