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
  },
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

module.exports = mongoose.model("empdetails", empSchema);

