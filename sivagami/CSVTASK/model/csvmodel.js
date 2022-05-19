const mongoose = require("mongoose");

const CsvSchema= new mongoose.Schema({
    Name:{
        type:String,
    },
    Age:{
        type:Number,
    },
    DateofBirth:{
        type:Date,

    },
    First_name:{
        type:String,
    },
    Last_name:{
        type:String, 
    },
});
const CSVfile = mongoose.model('CSVfile', CsvSchema,'CSVDATA' );
     // // Export API routes
    module.exports ={CSVfile}