const mongoose = require('mongoose');
const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Dob:{
        type: String,
        required: true
    }
});
const User = mongoose.model('postdata', StudentSchema)
module.exports = User;