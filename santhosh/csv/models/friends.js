const mongoose = require('mongoose');
let friendsschema = new mongoose.Schema({
    name: {
        type:String
    },
    age: {
        type:String
    }
})
module.exports = mongoose.model('friends', friendsschema);