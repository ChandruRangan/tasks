const express = require('express');
const crud = express();
const knex = require('knex');
const bodyparser = require("body-parser");
crud.use(bodyparser.urlencoded({extended:true}));
crud.set('view engine','ejs');
crud.use(bodyparser.json());

const db=knex({
    client:"pg",
    connection:{
        host:"localhost",
        user:"sivi",
        password:"sivi@123",
        database:"crud",
    },
});
crud.get("/", (req,res)=>{
    db.select("*")
    .from("category")
    .then((data) => {
        res.render("crud",{data:data});
    })
    .catch((err)=>{
        res.status(400).json(err);
    });
});

crud.post("/insert",(req,res)=>{
    const pn=req.body.pn;
    const price=req.body.price;
    const category=req.body.category;
    console.log(pn+price+category);
    db("product").insert(
        {
           product_name:pn,
           price:price,
           category_id:category,
           created_at:Date(Date.now()),
        })
        .then(()=>{
            console.log("inserted");
            res.redirect("/");
        })
        .catch((err)=>{
            res.status(400).json({message:err});
        });
});
crud.get("/dis",(req,res)=>{
    db("product").join("category","product.category_id","category.category_id")
    .select("product.product_id","product.product_name","product.price","category.category_id","product.created_at","product.updated_at",)
    .then((result)=>{
        res.render("find",{product:result});
     })
     .catch((err) =>{
         res.json({message:err});
         });
});
crud.post("/find",(req,res)=>{
    const{search}=req.body;
    db("product")
    .join("category","product.category_id","category.category_id")
    .select("product.product_id","product.product_name","product.price","category.category_id","product.created_at","product.updated_at")
    .where("category.categoryname",search)
    .then((value)=>{
        res.render("crud",{product:value});
    })
    .catch((err)=>{
        res.json({message:err});
    });
});

crud.get("/update", (req, res) => {
const id=req.query.id;
/* db.select("*").from("product").where("product_id",id).then((data)=>{
    db.select("*")
    .from("category").orderby("category","asc")
    .then((category) => {
        res.render("update", { data:data,id:id,category:category });
        console.log('sucess');
    })
    }).catch((err)=>{
        res.json({message:err});
    }); */
    db.select("*").from("product").where("product_id",id).then((data)=>{
        db.select("*").from('category').orderBy("category","asc").then((cat)=>{
            res.render('update',{data:data,id:id,category:cat});
        })
    })
  });
 crud.post("/updatenext", (req, res) => {
      const id=req.query.id;

      
    
    const pn= req.body.pn;
    const price = req.body.price;
    const category = req.body.category;
    db("product")
    .where('product_id','=',id)
    .update({
        product_id: id,
        product_name: pn,
        price: price,
        category_id: category,
        updated_at: Date(Date.now()),
      })
      .then(() => {
        res.redirect("/dis");
      })
      .catch((err) => {
        res.status(400).json({ message: err });
      });
  });
  crud.get("/delete", (req, res) => {
    const id=req.query.id;
    console.log(id);
    db("product")
      .where('product_id', id)
      .del()
    .then(() => {
      res.redirect("/dis");
      
    })
  });
crud.listen(5454);