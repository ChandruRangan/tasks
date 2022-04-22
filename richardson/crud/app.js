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
    const product=req.body.product;
    const category=req.body.category;
    const price=req.body.price;
    db("products").insert({ product_name:product,category_id:category,price:price,created_at:Date(Date.now())})
    .then(_=> {
       res.redirect("/");
    }).catch(err => {
        res.status(400).json({ message: err});
    });
});
app.get("/view",(req,res)=>{
    db("products as p")
    .join("category as c","p.category_id","c.category_id")
    .select("p.products_id",
            "p.product_name",
            "c.category_name",
            "p.price",
            "p.created_at"
            )
            .then((data)=>{  
                res.render("view",{data: data});
               })
               .catch(err => res.status(400).json({message:err}));
            });

 app.post("/search",(req,res)=>{
     const input=req.body.input;
     if (input == ''){
         res.redirect("/view");
     }
     else{
     db("products as p")
     .join("category as c","p.category_id","c.category_id")
     .where("c.category_name",input)
     .select("p.products_id",
             "p.product_name",
             "c.category_name",
             "p.price",
             "p.created_at")
             .then((data)=>{
                 

                     res.render("view",{data:data});
                    
             })
             .catch(err => res.status(400).json({message:err}));
   }
});

  app.listen(5000);
