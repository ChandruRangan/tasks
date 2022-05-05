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
    
    const Employee = mongoose.model('Employee', EmpSchema );
    
  // // Export API routes
    module.exports ={Employee}
    
  //   module.exports.get = function (callback)
  //    {
  //      console.log(Employee);
  //     Employee.find(callback);
  // }

