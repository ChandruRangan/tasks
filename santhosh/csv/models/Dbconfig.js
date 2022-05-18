const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/cruddb', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Connection created.')
    }
    else {
        console.log('Connection failed: : ' + err)
    }
});
 
