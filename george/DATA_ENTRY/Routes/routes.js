const express = require('express');
const router = express.Router();
const fs = require('fs');
const csvtojson = require('csvtojson');
const User = require('../Model/studentSchema');
const User1 = require('../Model/EmployeeSchema')
const db = require('../Database/db');
const { deflateSync } = require('zlib');
router.post('/Employee',async(req,res)=>{
  const Data1 =[];
  await csvtojson()
  .fromFile("./CSV/Employee.csv")
  .then(csvData=> {
    const Data = csvData;
    for (var i=0; i<Data.length; i++){
    const Datas ={
      name: Data[i]['first_name']+","+Data[i]['last_name'],
    }
    Data1.push(Datas)
    }
    console.log(Data1);
})
})
router.post('/Friends',async(req,res)=>{
  await csvtojson()
  .fromFile("./CSV/Friends.csv")
  .then(csvData=>{
    const Data = csvData;
      const agefilter = Data.filter(d=> d.age<50)
      console.log(agefilter);
  })
  .catch((err)=>{
    console.log(error)
  })
})
router.post('/People',async(req,res)=>{
  const Eligibility = [];
   await csvtojson()
  .fromFile("./CSV/People.csv")
  .then(csvData=>{
    const Data = csvData;
    for(var i=0;i<Data.length;i++){
    const Age = {};
    Age.name=Data[i]['name'];
    Age.age=Data[i]['age'];
    Age.Eligible_for_voting=Data[i]['age']>18;
    Eligibility.push(Age)
  }
    console.log(Eligibility)
  })
})
router.post('/Students',async(req,res)=>{
  const DataStudent=[];
    await csvtojson()
    .fromFile("./CSV/Students.csv")
    .then(csvData=>{
      const Data = csvData;
     for(var i=0;i<Data.length;i++){
       const date = new Date(Data[i]['Dob']);
       const Date1 = date.getMonth()+" "+date.getDate()+" "+date.getFullYear()
       const StudentData= {
         Name: Data[i]["Name"],
         Dob: Date1,
       };
       DataStudent.push(StudentData)
     }
     console.log(DataStudent)
    })
})

module.exports = router;
