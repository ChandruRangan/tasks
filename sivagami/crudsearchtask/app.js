const express = require("express");
const app = express();
const mongoose = require("mongoose");
//  const Router = require("./router")
const bodyparser= require("body-parser");
const Emproute=  require ('./emp.route');  //import route
//const router = require("./emp.route");
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.set('view engine','ejs');
app.use(express.json());
// app.engine('ejs', require('ejs').renderFile);


mongoose.connect('mongodb://localhost:27017/CRUDtask',
  {
    useNewUrlParser: true,
    //  useFindAndModify: false,
    //  useUnifiedTopology: true
  }
);
const db = mongoose.connection;
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")
//setup server port
    app.listen(4200,()=>{
      console.log("port is running");
      }); 


      // app.use(function(req, res, next) {
      //   next(createError(404));
      // });
      

      app.use('/',Emproute);
      
//       app.use(function(err, req, res, next) {
//         res.locals.message = err.message;
//         res.locals.error = req.app.get('env') === 'development' ? err : {};
//         res.status(err.status || 500);
//   res.render('error');
// });

module.exports=app;
      
// app.get('/', (req, res) => 
// res.send('Hello World with Express'));

// app.use('/api',Emproute)






 


