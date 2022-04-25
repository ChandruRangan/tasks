const express = require("express");
const app = express();
const knex = require("knex");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

const db = knex({
    client: "pg",
    connection: {
        host: "localhost",
        user: "kaviya",
        password: "kaviya06*",
        database: "cruddb"
    }
});

app.get("/",(req,res) => {
    db.select("*")
      .from("category")
      .then((data) => {
          res.render("crud",{data: data });
      })
      .catch((err) => {
        res.status(400).json({err});
      });
});

app.post("/insert", (req,res) => {
    const {pname}= req.body;
    const {price} = req.body;
    const {category} = req.body;

    db("product").insert({
        product_name: pname,
        price: price,
        category_id: category,
        created_at: Date(Date.now()),
    })
    .then(() => {
        res.redirect("/");
    })
    .catch((err) => {
        res.status(400).json({ message: err });
    });

});

app.get("/display",(req,res) =>{
    db("product").join("category","product.category_id","category.category_id")
    .select("product.product_id","product.product_name","product.price","category.category_name","product.created_at","product.updated_at")
    .then((result) => {
        res.render("view",{data: result});
    })
    .catch((err) => {
        res.json({message: err});
    });
});

app.post("/view",(req,res) => {
    const{search} = req.body;
    db("product")
    .join("category","product.category_id","category.category_id")
    .where("category.category_name",search)
    .select("product.product_id","product.product_name","product.price","category.category_name","product.created_at")
    .then((data) => {
        res.render('view',{product: data});
    })
    .catch((err) => {
        res.json({message: err});
    });
})

app.get("/delete", (req, res) => {
    const id=req.query.id;
    console.log(id);
    db("product")
      .where('product_id', id)
      .del()
    .then(() => {
      res.redirect("/dis")
    })
  });
  
  app.listen(4000, () => {
    console.log(`The running port is http://localhost:4000`);
  });