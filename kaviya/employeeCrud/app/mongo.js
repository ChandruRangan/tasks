const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/cruddb', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Connection created.')
    }
    else {
        console.log('Connection failed: : ' + err)
    }
});
 

require('./emp.insert');




// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/employeeCrud",
// { 
//     useNewUrlParser: true
    
// }, (err) => {
//     if(!err){
//         console.log('connection')
//     }

//     else {
//     console.log("something went wrong")
//     }
// });



// .then(() => {
//     console.log('connection successful');
// }).catch((err) => {
//     console.log("something went wrong",err)
// }))