const mongoose = require('mongoose');
let studentschema = new mongoose.Schema({
    name:{
        type:String
    },
    dob:{
        type:String
    }
})
module.exports = mongoose.model('student', studentschema);