const mongoose = require("mongoose");
const db = mongoose.connect('mongodb://localhost:27017/Architectdb',{useNewUrlParser: true},(err)=>{
  if(!err){
    console.log('db connected')
  }else{
    console.log('error connection')
  }
});
module.exports = db
require('../models/EmployeeSchema');