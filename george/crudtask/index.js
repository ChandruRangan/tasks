const express = require('express');
const app = express();
const bodyparser= require('body-parser')
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
const res= require('express/lib/response');
app.set('view engine','ejs')   
const knex= require ('knex');
const db = knex({
    client:'pg',
    connection:{
        host:"localhost",
        user:"george",
        password:123,
        database:"crud"
    }
})
app.get('/',(req,res)=>{
    db.select('*').from('category').then((data)=>{
        res.render('view',{data:data});
    })
    .catch(err=>{
        res.status(400).json(err);
    })

    })
app.listen(8000,()=>{
    console.log('the running port is 8000');
});
app.post('/insert',(req,res)=>{
    const{product}= req.body;
    const{category}= req.body;
    const{price}= req.body;
    db("product").insert({product_name:product,price:price,category_id:category,created_at:Date(Date.now())})
    .then(()=>{
        res.redirect('/');
    })
    .catch((err)=>{
        res.status(400).json({err})
    });   
});
app.get('/add',(req,res)=>{
    db("product")
    .join("category","product.category_id","category.category_id")
    .select("product.product_id","product.product_name","product.price","category.category_name","product.created_at","product.updated_at")
    .then((data)=>{
        res.render('crud',{data:data})
    })
    .catch((err)=>{
        res.status(400).json({err})
    });
});
app.get('/',(req,res)=>{
    const id= req.query.id;
    db.select("*")
    .from("product")
    .where("product_id",id)
    .then((data)=>{
        db.select("*")
        .from("category_table")
        .then((category)=>{
            res.render('update');
            res.render("u1",{data:data,id:id,category:category})
        })
    })
    .catch((err)=>{
        res.status(400).json(err);
    });
});
