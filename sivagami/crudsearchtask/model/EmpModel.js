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
      // min:10,
      //  max:10,
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
    
 
