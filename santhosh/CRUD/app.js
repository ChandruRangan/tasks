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
        user:"postgres",
        password:"sandy@001",
        database:"crud",
    },
})
app.get('/',(req,res)=>{
    db.select('*')
    .from("category")
    .then((data)=>{
      res.render('index',{data: data});
     })
     .catch(err => res.status(400).json(err));
  });
  app.post("/insert", (req, res) => {
    const {product}=req.body;
    const {category}=req.body;
    const {price}=req.body;
    db("product").insert({ product_name:product,category_id:category,price:price,created_at:Date(Date.now())})
    .then(()=> {
       res.redirect("/");
    }).catch((err) => {
        res.status(400).json({ message: err});
    });
});
app.get("/view", (req, res) => {
    db("product as p")
    .join("category as c","p.category_id","c.category_id")
    .select("p.product_id","p.product_name","c.category_name","p.price","p.created_at")
    .then((data) => {
        res.render('view',{data:data});
    })
    .catch((e) => {
        res.status(400).json({e})
    });
    });
app.post("/search", (req, res) => {
    const {search} = req.body;
    // console.log(search);
    db("product")
    .join("category","product.category_id","category.category_id")
    .where('product.product_name', search)
    .select("product.product_id","product.product_name","category.category_name","product.price","product.created_at")
    .then((data) => {
        res.render('view',{data:data});
    })
    .catch(e => res.status(400).json(e));
})

  app.listen(2000, () => {
      console.log(`The running port is http://localhost:2000`)
  });