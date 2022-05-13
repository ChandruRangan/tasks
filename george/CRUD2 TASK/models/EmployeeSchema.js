const mongoose = require ("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuidv1")
const EmployeeSchema = new mongoose.Schema({
    Name:{type: String, required: true},
    Employee_type:{type: String, required: true},
    Email:{type: String, required:true},
    Phoneno:{type:Number, required:true, maxlength: 10},
    DOJ:{type: Date, required:true},
    DOB:{type:Date, required:true},
    token:{type: String},
    encrypt_password:{
        type: String,
        required: true
    },
    salt: String,
})
EmployeeSchema.virtual("password") 
    .set(function(password){
      this._password = password
      this.salt = uuidv1()
      this.encrypt_password = this.securePassword(password )
    })
     .get(function(){
       return this._password
     })
   EmployeeSchema.methods = {
       authenticate: function(plainpassword){
           return this.securePassword(plainpassword)===this.encrypt_password
       },
       securePassword: function(plainpassword){
           if(!plainpassword) return "";
           try{
               return crypto.createHmac("sha256", this.salt).update(plainpassword).digest("hex")
           }catch(err){
               return "err"
           }
       }
   }


module.exports= mongoose.model("Employee",EmployeeSchema,);