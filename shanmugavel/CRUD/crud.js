
const express =require('express');
const bodyParser =  require('body-parser');
let fs = require('fs') ;         //file system for handlind db//
const app = express();
// const port = 5000;

app.use(bodyParser.urlencoded({
    extended:true
}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/crud.html");
    
});

app.post('/addUser',(req,res)=>{
    let product =req.body.product;
    let category=req.body.category;
    let price=req.body.price;
    let object= {};
     var key = req.body.product;
     var newprdt = {
         "product" =  product,
         "category"= category,
         "price"=price;
     }
})


// app.listen(1122);