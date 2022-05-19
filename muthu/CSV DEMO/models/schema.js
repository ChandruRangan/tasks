// var mongoose  =  require('mongoose');  
   
// var csvSchema = new mongoose.Schema({  
//     name:{  
//         type:String  
//     },  
//     dob:{  
//         type:Date  
//     },  
// });  
   
// module.exports = mongoose.model('studentModel',csvSchema);


var mongoose  =  require('mongoose');  
   
var StudentSchema = new mongoose.Schema({  
    name:{  
        type:Array  
    },  
    dob:{  
        type:Array
    },  
});  
   
module.exports = mongoose.model('students',StudentSchema);

/*var FriendSchema = new mongoose.Schema({  
    name:{  
        type:String  
    },  
    age:{  
        type:Number 
    },  
});  
   
module.exports = mongoose.model('schema',FriendSchema);

var EmployeeSchema = new mongoose.Schema({  
    first_name:{  
        type:String  
    },  
    last_name:{  
        type:String
    },  
});  
   
module.exports = mongoose.model('schema',EmployeeSchema);

var PeopleSchema = new mongoose.Schema({  
    name:{  
        type:String  
    },  
    age:{  
        type:Number
    },  
    eligible_for_voting:{
          type:String
    },
});  
   
module.exports = mongoose.model('schema',PeopleSchema); */