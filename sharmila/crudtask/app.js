const express = require('express');
const app = express();
const knex = require('knex');
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended:true }));
app.use(bodyparser.json());
app.set('view engine','ejs');
const db=knex({
  
    client:'pg',
    connection:{
        host:"localhost",
        user:"sharmii",
        password:"1323",
        database:"crud",
    },
});
 
    app.get('/',(req,res)=>{
        db.select('*')
        .from("category_table")
        .then((data)=>{
            res.render('crud',{data:data});
        })
        .catch(err => res.status(400).json(err));
    });

    app.post("/insert",(req,res) =>{
        const {product}= req.body;
        const {category}= req.body;
        const {price}= req.body;
         
        db("product").insert({product_name:product,price:price,category_id:category,created_at:Date(Date.now())})
        .then(()=>
            {
                res.redirect("/");
            })
            .catch(err =>{
                 res.status(400).json({ message:"nothing"})
            });
    });
     
    app.get("/vie",(req,res)=>
    {
      db("product")
      .join("category_table","product.category_id","category_table.category_id")
      .select("product.product_id","product.product_name","category_table.category_name","product.price","product.created_at")
      .then((data)=>{
          res.render('view',{data:data});
      })
      .catch((err) => {
          res.status(400).json({err})
      });
    });
  
     app.listen(8000,()=>{
         console.log('the running port is 3000');
     })