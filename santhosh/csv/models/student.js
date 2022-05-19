const mongoose = require('mongoose');
let studentschema = new mongoose.Schema({
    name: {
        type: String,
        unique: true

    },
    dob: {
        type: String
    }
})
module.exports = mongoose.model('student', studentschema);