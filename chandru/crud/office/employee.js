const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crud',{useNewUrlParser:true},(done)=>{
if (!done){console.log('mongodb connection success')}
else{console.log('error in db connection:'+done)}
});
require('./value');
