const express = require('express');
const router = express.Router();
const db = require('../models/Dbconfig')
const fs = require('fs');
const csvtojson = require('csvtojson');
const json2csv = require('json2csv');
const friends = require('../models/friends');
const employees = require('../models/employees');
const people = require('../models/people');
const student =  require('../models/student');

router.post('/friends', async(req, res) => {
    const filename = 'friends.csv';
await csvtojson()
.fromFile(filename)
.then(csvfile => {
    const filedata = csvfile;
    const age = filedata.filter(d => d.age<50)
    // console.log(age);
    res.send(age);
})
.catch((err) => {
    console.log(err);
})
})

router.post('/employees', async(req, res) => {
    result = []
const filename1 = 'employees.csv';
await csvtojson()
.fromFile(filename1)
.then(csvdata => {
    const data = csvdata;
    for(let i = 0; i < data.length; i++){
        const a = {
            name:data[i]['first_name'] + ',' +data[i]['last_name']
        }
        result.push(a)
    }
    // console.log(result)
    res.send(result)
    })
})

router.post('/people', async(req, res) => {
    const filename2 = 'people.csv'
 await csvtojson()
.fromFile(filename2)
.then(csvfile => {
    let data = csvfile;
    for(i = 0; i < data.length; i++){
        data[i]['age'] > 18 ? data[i].eligible_for_voting = 'T' : data [i].eligible_for_voting = 'F'
    }
    // console.log(data)
    res.send(data)
})
})

router.post('/student', async(req, res) => {
     const filename3 = 'student.csv';
    let arr = [];
    await csvtojson()
    .fromFile(filename3)
    .then(csvfile => {
        for(let i =0; i < csvfile.length; i++){
            let months = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let date = new Date(csvfile[i]['dob']);
            let formatting = months[date.getMonth(String)]+' '+date.getDate()+'-'+date.getFullYear()
            let data = {
                name: csvfile[i]['name'],
                dob:formatting
            };
            arr.push(data);
        }
        // console.log(res);
        res.send(arr);
    })
})

module.exports = router;