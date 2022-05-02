const express = require('express');
const app = express();
const mongoose=require('mongoose');
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended:true }));
app.set('view engine','ejs');
app.use(bodyparser.json());
const Employee = mongoose.model('empModel');


app.get('/',(req,res)=>{
      res.render('Emp', {
          viewtitle:"Insert Employee"
      });
     })

app.post('/',(req,res) => {
    
})

app.listen(2000, () => {
    console.log(`The running port is http://localhost:2000`)
});

// // require('./app/mongo');

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose")
// app.get("/",(req,res)=>{
//     res.send("<h1>hi</h1>");
// });
// app.listen(3500, () => {
//     console.log("port 3500 is running!");
// });
 