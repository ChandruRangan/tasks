var express = require('express');
const app = express();
app.set('view engine','ejs');
 app.listen(9000, () => {
 console.log(`The running port is http://localhost:9000`)
});
const bodyParser = require('body-parser');
   const { HostAddress, Db } = require('mongodb');
   app.use(bodyParser.urlencoded({extended:true}));
   app.use(bodyParser.json);
   var MongoClient = require('mongodb').MongoClient;
   var url = "mongodb://localhost:27017/";
   app.post('/insert',(req,res)=>{
       const Proname = req.body.Projectname;
       Db.collection('Project_table').insertOne   
    })