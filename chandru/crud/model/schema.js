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
        validate: {
            validator: function(v) {
                return /d{10}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
        }
    },
    JoinnigDate: {
        type: Date,
    },
    Dateofbirth: {
        type: Date,
    },
});
module.exports = mongoose.model('Employee', employeeSchema, 'Employee');
/* let m= new Member();
m.contact = '123456789';
// Prints "ValidationError: 123456789 is not a valid 10 digit number!"
console.log(m.validateSync().toString());

m.contact = 0123456789;
// Prints undefined - validation succeeded!
console.log(m.validateSync()); */