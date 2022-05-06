const mongoose = require("mongoose");

const EmpSchema= new mongoose.Schema({

  //  employee_id:{
  //    type:Number,
  //  },
 
    FullName:{
      type:String,
      required:true,
    },
    Email:{
      type:String,
      },
    Password:{
      type:String,
      default:0,
    } ,
    PhoneNumber:{
      type:Number,
      },
    JoiningDate:{
      type: String
      // default:Date
    
    },
    DateofBirth:{
      type:String
      // default:Date,
    },
    });
    
const Employee = mongoose.model('Employee', EmpSchema,'employees' );
     // // Export API routes
    module.exports ={Employee}
    
 
