const mongoose = require ("mongoose");
//const crypto = require("crypto");
require('crypto').randomBytes(64).toString('hex')
const { JsonWebTokenError } = require("jsonwebtoken");
// const uuidv1 = require("uuidv1")
const EmployeeSchema = new mongoose.Schema({
    Name:{type: String, required: true},
    Employee_type:{type: String, required: true},
    Email:{type: String, required:true},
    Phoneno:{type:Number, required:true, maxlength: 10},
    DOJ:{type: Date, required:true},
    DOB:{type:Date, required:true},
    token:{type: String},
    Password:{
        type: String,
        required: true
    },
    //salt: String,
})
// EmployeeSchema.virtual("password") 
//     .set(function(password){
//       this._password = password
//       this.salt = uuidv1()
//       this.encrypt_password = this.securePassword(password )
//     })
//      .get(function(){
//        return this._password
//      })
//    EmployeeSchema.methods = {
//        authenticate: function(plainpassword){
//            return this.securePassword(plainpassword)===this.encrypt_password
//        },
//        securePassword: function(plainpassword){
//            if(!plainpassword) return "";
//            try{
//                return crypto.createHmac("sha256", this.salt).update(plainpassword).digest("hex")
//            }catch(err){
//                return "err"
//            }
//        }
//    }
EmployeeSchema.method ={
    function generateAccessToken(Name){
    return JsonWebTokenError.sign(Name,process.env.TOKEN_SECRET,{expiresIn:'1800s'});
}
}

module.exports= mongoose.model("Employee",EmployeeSchema,);