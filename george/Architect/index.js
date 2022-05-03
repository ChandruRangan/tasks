var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("sampledb");
//     dbo.collection("Example").insertOne({hi:"hello"},function(err,result) {
//       if (err) throw err;
//       console.log("value inserted")
//       db.close();
//     })
//   });
   var express = require('express');
   const app = express();
   app.set('view engine','ejs');
   app.listen(9000, () => {
    console.log(`The running port is http://localhost:9000`)
});

   const bodyParser = require('body-parser');
   const { HostAddress } = require('mongodb');
   app.use(bodyParser.urlencoded({extended:true}));
   app.use(bodyParser.json);
   app.post('/insert',(req,res)=>{
       const fullname = req.body.fullname;
       const email = req.body.Emailaddress;
       const password= req.body.pwd;
       const Doj = req.body.doj;
       const Dob = req.body.dob;
       MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("Architectdb");
        dbo.collection("Employee_table").insert({Fullname:"fullname",Email:"email",Password:"password",Doj:"Doj",Dob:"Dob"},function(err,result) {
          if (err) throw err;
          console.log("value inserted")
          db.close();
        })
        .then(()=>{
          res.redirect("/")
        }).catch((err)=>{
            res.status(400).json({err})
        })
      });
      

    })
    app.post('/insert1',(req,res)=>{
    const projectname = req.body.Projectname;
    const projectlead= req.body.Projectlead;
    const Team_member = req.body.Teammember;
    const Psd = req.body.prostartdate;
    const ped =req.body.Proenddate;


 })
 