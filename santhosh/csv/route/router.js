const express = require('express');
const router = express.Router();
const db = require('../models/Dbconfig')
const fs = require('fs');
const csvtojson = require('csvtojson');
const json2csv = require('json2csv');
const friends = require('../models/friends');
const {CSV} = require('../models/employees');
const {People} = require('../models/people');
const student = require('../models/student');
const employees=new CSV()
const people = new People()


router.post('/friends', async (req, res) => {
    const filename = 'friends.csv';
    await csvtojson()
        .fromFile(filename)
        .then(csvfile => {
            const filedata = csvfile;
            const age = filedata.filter(d => d.age < 50)
            friends.insertMany(age);
            res.send('Record inserted')
            // console.log(age);
            // res.send(age);  
        })
        .catch((err) => {
            console.log('error in inserting in mongodb', err);
            res.json(err)
        })
})

router.post('/employees', async (req, res) => {
    result = []
    const filename1 = 'employees.csv';
    await csvtojson()
        .fromFile(filename1)
        .then(csvdata => {
            const data = csvdata;
            for (let i = 0; i < data.length; i++) {
                const a = {
                    name: data[i]['first_name'] + ',' + data[i]['last_name']
                }
                result.push(a)
            }
            employees.collection.insert(result, function (err, docs) {
                if (err){
                    return console.error(err);
                } else {
                  console.log("Record inserted");
                }
              });
            // console.log(result)
            // res.send(result)
        })
        .catch((err) => {
            console.log('error in inserting mongodb', err);
            res.json(err);
        })
})

router.post('/people', async (req, res) => {
    const filename2 = 'people.csv'
    await csvtojson()
        .fromFile(filename2)
        .then(csvfile => {
            let data = csvfile;
            for (i = 0; i < data.length; i++) {
                if(data[i]['age'] > 18){
                    data[i].eligible_for_voting = 'T';
                }else{
                    data[i].eligible_for_voting = 'F';
                }
            }
           people.collection.insert(data, function (err, docs) {
               if(err){
                   return console.error(err);
               }else{
                   console.log('Record inserted ')
               }
           })
            res.send('Record inserted')
        })
        .catch(error => {
            console.log('error in inserting mongodb', error);
            res.json(error)
        })
})

router.post('/student', async (req, res) => {
    const filename3 = 'student.csv';
    let arr = [];
    await csvtojson()
        .fromFile(filename3)
        .then(csvfile => {
            for (let i = 0; i < csvfile.length; i++) {
                let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                let date = new Date(csvfile[i]['dob']);
                let formatting = months[date.getMonth(String)] + ' ' + date.getDate() + '-' + date.getFullYear()
                let data = {
                    name: csvfile[i]['name'],
                    dob: formatting
                };
                arr.push(data);
            }
            student.insertMany(arr);
            res.send('Record inserted');
            // console.log(res);
            // res.send(arr);
        })
        .catch(error => {
            console.log('error in inserting to mongodb', error);
            res.json(error)
        })
})

module.exports = router;