const express = require('express');
const router = express.Router();
const fs = require('fs');
const csvtojson = require('csvtojson');
const User = require('../Model/studentSchema');
const db = require('../Database/db');
const csvfilepath = "./CSV/Students.csv"
// router.post('/add',async(req,res)=>{
//   await csvtojson()
//   .fromFile(csvfilepath)
//   .then(csvData=>{
//     const Data = csvData;
//     console.log(Data);
//   })
//   .catch(function(error){
//     console.log(error)
//   });
// })
csvtojson()
.fromFile(csvfilepath)
.then(csvData=>{
  const Data = csvData;
  
})
csvtojson()
.fromFile("./CSV/Employee.csv")
.then(csvData=> {
    const Data = csvData;
    for (var i=0; i<Data.length; i++){
    const Datas = {
      name: Data[i]['first_name']+","+Data[i]['last_name']
    }
    console.log(Datas)
    }
})
router.post('/age',async(req,res)=>{
  await csvtojson()
  .fromFile("./CSV/Friends.csv")
  .then(csvData=>{
    const Data = csvData;
    console.log(Data);
  })
  .catch((err)=>{
    console.log(error)
  })
})

module.exports = router;
