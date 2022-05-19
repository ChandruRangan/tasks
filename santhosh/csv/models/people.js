const mongoose = require('mongoose');
let peopleschema = new mongoose.Schema({
    name:{
        type: String
    },
    age:{
        type: Number
    },
    eligibility_for_voting:{
        type: String

    }
})
module.exports = mongoose.model('people', peopleschema)