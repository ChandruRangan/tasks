const mongoose = require('mongoose');
let employeesschema = new mongoose.Schema({
    first_name: {
        type: String,
       
    },
    last_name: {
        type: String
    }

})
var CSV=mongoose.model('CSV', employeesschema,'employees');
module.exports = {CSV}