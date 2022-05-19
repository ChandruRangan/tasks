const express = require("express");
const app = express();
const router = require('express').Router();
module.exports = router;
const {CSVfile} = require("./models/schema");
const fs= require('fs');
const CSVToJSON = require('csvtojson');
const { json } = require("express/lib/response");
const csv= require('fast-csv');
const { response } = require("express");
const jsontocsv = require('json-2-csv');
const Mongoo= require('./models/dbconnection');
app.use('/',Mongoo);
let result;
CSVToJSON()
        .fromFile("/home/ag/Documents/tryouts/freshers-tryouts-2022/muthu/CSV DEMO/Employees CSV/Employees.csv")
        .then(Data => {
          result=Data;
        });
      app.post('/',(req,res)=>{
           const fresult=[];
              for(var i=0;i<result.length;i++){
                 if(result[i]['Age']<50){
                 result[i].fullname=result[i]['First_name']+","+result[i]['Last_name']
                      if(result[i]['Age']>=18){
                        result[i].eligible_for_voting="T" ;
                         }
                         else
                         {
                           result[i].eligible_for_voting="F";
                            }
                          var month =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                          var date = new Date(result[i]['DateofBirth']);
                          var format = month[date.getMonth(String)]+" "+date.getDate()+" "+date.getFullYear()
                           result[i]. DateofBirth=format;
                        fresult.push(result[i]);
                 }
                    }
                    res.send(fresult);
                //   console.log(fresult);
           //insert db
             var csvfile= new CSVfile();
             csvfile.collection.insert(fresult, function (err, docs) {
              if (err){
                  return console.error(err);
              } else {
                console.log("csvdata inserted to Collection");
              }
            });
             //convert jsontocsv
            jsontocsv.json2csv(fresult, (err, csv) => {
            //   console.log(fresult)
             if (err) {
                 throw err;
             }
             // print CSV string
             else{
            //  console.log(csv);
             }
             fs.writeFileSync('/home/ag/Documents/tryouts/freshers-tryouts-2022/muthu/CSV DEMO/Students CSV/Students.csv', csv);
         });
        });








































