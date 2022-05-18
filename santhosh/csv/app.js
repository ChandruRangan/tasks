const fs = require('fs');
const csvtojson = require('csvtojson');
const json2csv = require('json2csv')
const mongoose = require('mongoose')
const filename = '/home/santhosh/Desktop/age.csv';
let result = [];
csvtojson()
.fromFile(filename)
.then(csvfile => {
    for (let i = 0; i <csvfile.length; i++) {
        let row = {
            name: csvfile[i]['name'],
            age: csvfile[i]['age']
        };
result.push(row);
var b = result.filter((val)=>{
           return val.age < 50;
        });
    }
    console.log(b)
    
})

const filename1 = '/home/santhosh/Desktop/name.csv';
csvtojson()
.fromFile(filename1)
.then(csvdata => {
    const data = csvdata;
    for(let i = 0; i < data.length; i++){
        const a = {
            name:data[i]['first_name'] + ',' +data[i]['last_name']
        }
        console.log(a)
    }
})