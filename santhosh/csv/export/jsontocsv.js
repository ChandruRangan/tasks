const db = require('../models/Dbconfig');
const path = require('path')
const fs = require('fs')
const express = require('express');
const app = express();
const router = express.Router();
const student = require('../models/student');
const friends = require('../models/friends');
const {People} = require('../models/people');
const people = new People()
const {CSV} = require('../models/employees');
const employees = new CSV()
const Json2csvparser = require('json2csv').Parser;


router.get('/export/student', async(req, res) => {
    await student.find({}).lean().exec((err, data) => {
        if (err) throw (err);
        const csvFields = ['name', 'dob']
        console.log(csvFields);
        const json2csvparser = new Json2csvparser({
            csvFields
        })
        const csvData = json2csvparser.parse(data);
        fs.writeFile('studentoutput.csv', csvData, function(error){
            if (error) throw error;
            console.log('successfully written on output file!');
        })
        res.send('File download successfull')
    })
})

router.get('/export/friends', async(req, res) => {
    await friends.find({}).lean().exec((err, data) => {
        if(err) throw (err);
        const csvFields = ['name', 'age']
        console.log(csvFields);
        const json2csvparser = new Json2csvparser({
            csvFields
        })
        const csvData = json2csvparser.parse(data);
        fs.writeFile('friendsoutput.csv', csvData, function(error){
            if(error) throw error;
            console.log('successfully written on output file!');
        })
        res.send('File download successfull!')
    })
})

router.get('/export/peoples', async(req, res) => {
     let data =  await people.collection.find({}).toArray();
        const csvFields = ['name', 'age', 'eligible_for_voting']
        const json2csvparser = new Json2csvparser({
            csvFields
        })
        const csvData = json2csvparser.parse(data);
        fs.writeFile('peopleoutput.csv', csvData, function(error){
            if(error) throw error;
            console.log('successfully written on output file!');
        })
        res.send('File download successfull!')
})

router.get('/export/employees', async(req, res) => {
    let data = await employees.collection.find({}).toArray();
        const csvFields = ['name']
        const json2csvparser = new Json2csvparser({
            csvFields
        })
        const csvData = json2csvparser.parse(data);
        fs.writeFile('employeesoutput.csv', csvData, function(error){
            if(error) throw error;
            console.log('successfully written on output file!');
        })
        res.send('File download successfull!')
    })


router.get('/export')
module.exports = router;