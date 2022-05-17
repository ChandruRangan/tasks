const mongoose = require("mongoose");
var empSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required:true,
  },
  email: {
    type: String,
    // required: "please enter your email!",
  },
  password: {
    type: String,
    required:true,
    unique: true,
  },
  // employeeType:{
  //   type: String,
  //   // required:true,
  //   // TeamLead,
  //   // TeamMember,
  // },
  phoneNumber: {
    type: String,
    required:true,
  },
  joinDate: {
    type: Date,
    required:true,
  },
  dateofbirth: {
    type: Date,
    required:true,
  },
});

// email validation
empSchema.path("email").validate((val) => {
  emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, 'Please enter valid e-mail address.');
 //phone number
 empSchema.path("phoneNumber").validate((val) => {
  phoneRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[0-9]{3}?[0-9]{4,6}$/;
  return phoneRegex.test(val);
}, 'Please enter valid phone.');

module.exports = mongoose.model("empdetails", empSchema);

