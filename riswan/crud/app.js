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
      res.redirect("/");
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
});

app.get("/dis", (req, res) => {
  db("product").join("cat","product.category_id","cat.category_id")
  .select("product.product_id","product.product_name","product.price","cat.category","product.created_at","product.updated_at")
  .then((resul) => {
    res.render("find",{product:resul});
  })
  .catch((err) =>{
    res.json({message:err});
  });
});

app.post("/find", (req, res) => {
  const {search} = req.body;
  db("product")
  .join("cat","product.category_id","cat.category_id")
  .where('cat.category', search)
  .select("product.product_id","product.product_name","product.price","cat.category","product.created_at")
  .then((data) => {
      res.render('find',{product: data});
  })
  .catch((err) =>{
    res.json({message:err});
  });
})


app.get("/update", (req, res) => {
  db.select("*")
  .from("cat")
  .then((data) => {
    res.render("update", { data: data });
  })
});

app.post("/updatedata", (req, res) => {
  const {id}=req.body;
  const {pn}= req.body;
  const {price} = req.body;
  const {category} = req.body;


  db("product")
  .update({
      product_id: id,
      product_name: pn,
      price: price,
      category_id: category,
      updated_at: Date(Date.now()),
    })
    .where('product_id', id)
    .then(() => {
      res.redirect("/dis");
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
});

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

app.listen(5454);
