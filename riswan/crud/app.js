const express = require("express");
const app = express();
const knex = require("knex");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "riswan1",
    password: "Riswan@123",
    database: "crud",
  },
});

app.get("/", (req, res) => {
  db.select("*")
    .from("cat")
    .then((data) => {
      res.render("crudpro", { data: data });
    })
    .catch((err) => {
      res.status(400).json({err});
    });
});

app.post("/insert", (req, res) => {
  const {pn}= req.body;
  const {price} = req.body;
  const {category} = req.body;

  db("product").insert({
      product_name: pn,
      price: price,
      category_id: category,
      created_at: Date(Date.now()),
    })
    .then(() => {
      // console.log("inserted");
      res.redirect("/");
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
});

app.get("/dis", (req, res) => {
  db("product").join("cat","product.category_id","cat.category_id")
  .select("product.product_id","product.product_name","product.price","cat.category","product.created_at")
  .then((resul) => {
    res.render("richardson",{product:resul});
  })
  .catch((err) =>{
    res.json({message:err});
  });
});

app.post("/find", (req, res) => {
  const {search}=req.body;
  db("product")
  .join("cat","product.category_id","cat.category_id")
  .select("product.product_id","product.product_name","product.price","cat.category","product.created_at")
  .where("cat.category_name",search)
  .then((valu) => {
    res.render("richardson",{product:valu});
  }).catch((err) =>{
    res.json({message:err});
  });
})


app.listen(5000);
