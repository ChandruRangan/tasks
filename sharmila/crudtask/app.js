const express = require('express');
const app = express();
const knex = require('knex');
const bodyparser = require("body-parser");
const res = require('express/lib/response');
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
        .catch((err) => {
            res.status(400).json(err)
        
        });
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
            .catch((err) =>{
                 res.status(400).json({err})
            });
    });
     
    app.get("/view",(req,res) =>
    {
      db("product")
      .join("category_table","product.category_id","category_table.category_id")
      .select("product.product_id","product.product_name","category_table.category_name","product.price","product.created_at","product.updated_at")
      .then((data)=>{
          res.render('view',{data:data});
      })
      .catch((err) => {
          res.status(400).json({err})
      });
    });

    app.post("/search",(req,res) =>{
        const {search} = req.body;
        db("product")
        .join("category_table","product.category_id","category_table.category_id")
        .where('product.product_name' ,search)
        .select("product.product_id","product.product_name","category_table.category_name","product.price","product.created_at","product.upadted_at")
        .then((data) => {
            res.render('view',{data:data});
        })
        .catch((err) => {
            res.status(400).json({err})
        });
    });

      app.get("/update",(req,res) =>{
          const id = req.query.id;
          db.select("*")
          .from("product")
          .where("product_id",id)
          .then((data) => {
              db.select("*")
              .from("category_table")
              .then((category) =>{
                res.render('update');
                   res.render("u1",{data:data,id:id,category:category}); 
              })
           })  
      .catch((err) => {
      res.status(400).json(err);
     }); 
      });  


      app.post("/updated",(req,res) => {
          let product_id = req.query.id;
          const product = req.body.product;
          const category = req.body.category;
          const price = req.body.price;
          db("product")
          .where('product_id', '=' ,product_id)
          .update({
              product_name:product,
              price:price,
              category_id:category,
              updated_at: Date(Date.now())
          }) 
          .then(() =>{
              res.redirect("/view");
          })
          .catch((err) => {
              res.status(400).json(err);
          })
      });


    app.get("/delete", (req, res) => {
        const id=req.query.id;
        db("product")
          .where('product_id', id)
          .delete()
        .then(() => {
          res.redirect("/view")
        })
      });



  
     app.listen(5000,()=>{
         console.log('the running port is 5000');
     })

