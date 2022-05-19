const mongoose = require('mongoose');
let peopleschema = new mongoose.Schema({
    name: {
        type: String,
        unique:true
    },
    age: {
        type: Number
    },
    eligibility_for_voting: {
        type: String

    }
})
var People = mongoose.model('People', peopleschema, 'people')
module.exports = {People}