const mongoose = require('mongoose');
var empSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: 'Please enter full name.'
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    phonenumber: {
        type: String
    },
    joiningdate:{
        type: String
    },
    dateofbirth:{
        type: String
    }

});
 
// email validation
empSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Please enter valid e-mail addtess.');
module.exports =mongoose.model('empdetails', empSchema);
