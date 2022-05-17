const express = require('express');
const router = express.Router();
const fs = require('fs');
const csvtojson = require('csvtojson');
const User = require('../Model/studentSchema');
const db = require('../Database/db');
router.post ('/add',async(req,res)=>{
     await csvtojson()
      .fromFile("../DATA_ENTRY/CSVFILES/students.CSV")
      .then(csvData=>{
          const Data = csvData;
          console.log(Data);
          })
        .catch(function(error){
            console.log(error);
      });
})
router.post('/add1',(req,res)=>{
     fs.readFile("People.CSV","utf8",function(err,data){
       console.log(data);
     })
    })
  
module.exports = router;
