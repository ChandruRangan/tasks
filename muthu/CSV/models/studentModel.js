var mongoose  =  require('mongoose');  
   
var csvSchema = new mongoose.Schema({  
    name:{  
        type:String  
    },  
    dob:{  
        type:String  
    },  
});  
   
module.exports = mongoose.model('studentModel',csvSchema);