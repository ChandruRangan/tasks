const mongoose = require('mongoose');
let employeesschema = new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type:String
    }

})
module.exports = mongoose.model('employees', employeesschema);