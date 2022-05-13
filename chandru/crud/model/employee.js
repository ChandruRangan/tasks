const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/crud',{useNewUrlParser:true},(err)=>{
if(!err){console.log('MongoDb Connection Success.')}
else{console.log('error in Db Connection:'+err)}
});
require('./schema.js')