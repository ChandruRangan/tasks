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
app.get("/update"  ,(req, res) => {
    const id = parseInt(req.query.id);
     db
      .select("*")
      .from("product")
      .where("product_id", id)
      .then((data) => {
          db.select("*")
        .from("category")
        .orderBy("category_name", "asc").then((c)=>{
            res.render("update", { data: data, id: id,c:c });
          })
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

app.post("/updatedata",(req,res)=>{
    let pid=req.query.id;
    console.log(pid);
    const product = req.body.product;
    const category = req.body.category;
    const price = req.body.price;
    console.log(product+category+price);
    db('product')
    .where('product_id',pid)
    .update({
      product_name: product,
      price: price,
      category_id: category,
      updated_at: Date(Date.now())    
    }).then(()=>{
      res.redirect('/view');
    }).catch(e=>{
      res.status(400).json(e);
    })
  });
app.get("/casc", (req, res) => {
    const { c } = req.query;
    db("product as p")
      .join("category as c", "p.category_id", "c.category_id")
      .select(
        "p.product_id",
        "p.product_name",
        "c.category_name",
        "p.price",
        "p.created_at",
        "p.updated_at"
      )
      .orderBy(c)
      .then((data) => {
        db.select("*")
        .from("category")
        .orderBy("category_name", "asc").then((c)=>{
        res.render("view", { data: data,c:c});
      })
      })
      .catch((err) => {
        res.status(400).json({ message: err });
      });
  });
  app.get("/delete",(req, res) => {
    const  id  = parseInt(req.query.id);
    console.log(id);
    db("product")
      .where("product_id", id)
      .del()
      .then(() => {
          res.redirect('view');
      }).catch(err=>{
          res.status(400).json(err);
      });
  });

  app.listen(2000, () => {
      console.log(`The running port is http://localhost:2000`)
  });