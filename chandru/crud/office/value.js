const mongoose = require('mongoose');
let employeeSchema=new mongoose.Schema({
FullName:{
type: String,
},
Email:{
    type: String,

},
Password: { type: String, select: false },
Phonenumber:{
    type: Number,
},
JoinnigDate:{
    type: Date,
},
Dateofbirth:{
    type: Date,
},
});
/* employeeSchema.path('email').validate((val)=> {
    emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return emailRegex.test(val);
},'invalid e-mail.'); */
mongoose.model('Employee',employeeSchema);   //Employee not a filename you enter any value employeeschema is a 