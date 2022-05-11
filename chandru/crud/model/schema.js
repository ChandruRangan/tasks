const mongoose = require('mongoose');
let employeeSchema = new mongoose.Schema({
    FullName: {
        type: String,
    },
    Email: {
        type: String,
    },
    Password: { type: String,select: false },
    Phonenumber: {
        type: Number,
    },
    JoinnigDate: {
        type: Date,
    },
    Dateofbirth: {
        type: Date,
    },
});
module.exports = mongoose.model('Employee', employeeSchema, 'Employee');
