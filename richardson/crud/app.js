const express = require('express');
const app = express();
const knex=require('knex');
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended:true }));
app.set('view engine','ejs');
app.use(bodyparser.json());

const db= knex({
    client:'postgresql',
    connection:{
        host:"localhost",
        user:"college",
        password:"college",
        database:"shop",
    },
})
app.get('/',(req,res)=>{
    db.select('*')
    .from("category")
    .then((data)=>{  
      res.render('crud',{data: data});
     })
     .catch(err => res.status(400).json(err));
  });
  app.post("/insert", (req, res) => {
    const {product}=req.body;
    const {category}=req.body;
    const {price}=req.body;
    db("products").insert({ product_name:product,category_id:category,price:price,created_at:Date(Date.now())})
    .then(_=> {
       res.redirect("/");
    }).catch(err => {
        res.status(400).json({ message: err});
    });
});
  app.listen(5000);