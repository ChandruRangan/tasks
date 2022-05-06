// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//    MongoClient.connect(url, function(err, db) {
//    var dbo = db.db("sampledb");
//     dbo.collection("Example").insertOne({hi:"hello"},function(err,result) {
//       if (err) throw err;
//       console.log("value inserted")
//       db.close();
//     })
  //});//     if (err) throw err;
 
//    var express = require('express');
//    const app = express();
//    app.set('view engine','ejs');
//     app.listen(9000, () => {
//     console.log(`The running port is http://localhost:9000`)
// });

//    const bodyParser = require('body-parser');
//    const { HostAddress } = require('mongodb');
//    app.use(bodyParser.urlencoded({extended:true}));
//    app.use(bodyParser.json);
//    app.get('/',(req,res)=>{

//    })
//    app.post('/insert',(req,res)=>{
//        const fullname = req.body.fullname;
//        const email = req.body.Emailaddress;
//        const password= req.body.pwd;
//        const Doj = req.body.doj;
//        const Dob = req.body.dob;
//        MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         const dbo = db.db("Architectdb");
//         dbo.collection("Employee_table").insertMany({Fullname:"fullname",Email:"email",Password:"password",Doj:"Doj",Dob:"Dob"},function(err,result) {
//           if (err) throw err;
//           console.log("value inserted")
//           db.close();
//         })
//         .then(()=>{
//           res.redirect("/")
//         }).catch((err)=>{
//             res.status(400).json({err})
//         })
//       });
      

//     })
//     app.post('/insert1',(req,res)=>{
//     const projectname = req.body.Projectname;
//     const projectlead= req.body.Projectlead;
//     const Team_member = req.body.Teammember;
//     const Psd = req.body.prostartdate;
//     const ped =req.body.Proenddate;
//      MongoClient.connect(url, function(err,db){
//          if (err) throw err;
//          const dbo = db.db("Architectdb");
//          dbo.collection("Prject_table").insertMany({projectname:"projectname",projectlead:"projectlead",Team_member:"Teammember",prostartdate:"Psd",proenddate:"Ped"}){
//              if (err) throw err;
//              console.log("value inserted")
//              db.close();
//      })
//      .then(()=>{
//          res.redirect("/")
//      })

//  }
const express = require('express')
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
const client = require ('./mongo')
app.set('view engine','ejs');
const employee=require('./employee');
app.post('/insert1', async (req, resp) => {
    const { Full_name, Email_Address, Password, Phone_Number, Joining_Date, DOB } = req.body;
    await client.db('Architectdb').collection('Emp').insertOne({ Name: Full_name, mail: Email_Address, password: Password, Phno: Phone_Number, JoiningDate: Joining_Date, dob: DOB })
        .then((res) => { console.log(res); })
        .catch((err) => { console.log(err) });
});

app.get('/',employee.listemployee);
app.get('/insert',async(req,res)=>{
    res.render('insert')
  });
app.get('/search',employee.empsearch);
