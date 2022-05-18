const mongoose = require('mongoose');
const EmployeeSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    }
});
const User1 = mongoose.model('Empdata',EmployeeSchema)
module.exports = User1;