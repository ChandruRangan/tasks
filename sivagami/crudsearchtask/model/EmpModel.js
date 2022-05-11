const mongoose = require("mongoose");


const EmpSchema= new mongoose.Schema({
 
    FullName:{
      type:String,
      required:true,
    },
    Email:{
      type:String,
      },
    Password:{
      type:String,
    } ,
    PhoneNumber:{
      type:Number,
      min:0,
      max:11,
      },
    JoiningDate:{
      type: Date,
       },
    DateofBirth:{
      type:Date,
      },
    });
    
const Employee = mongoose.model('Employee', EmpSchema,'employees' );
     // // Export API routes
    module.exports ={Employee}
    
 
