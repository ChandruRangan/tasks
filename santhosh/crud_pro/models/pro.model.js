const mongoose = require('mongoose');
var proSchema = new mongoose.Schema({
    pro_name : {
        type : String,
        required : 'Please enter project name'
    },
    pro_lead : {
        type : String
    },
    team_mem : {
        type : String
    },
    Psdate : {
        type : String
    },
    Pedate : {
        type : String
    }

})

module.exports = mongoose.model('prodetails', proSchema);