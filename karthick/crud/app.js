const express = require("express");
const app = express();
const port = 5000;
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const knex = require("knex");
const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "karthick",
    password: "ruthra",
    database: "store",
  },
});

app.get("/", (req, res) => {
  db.select("*")
    .from("categories")
    .orderBy("category_name", "asc")
    .then((data) => {
      res.render("crud", { cat: data });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
});

app.post("/insert", (req, res) => {
  const pname = req.body.pname;
  const catid = req.body.catid;
  const price = req.body.price;
  db("products")
    .insert({
      product_name: pname,
      price: price,
      category_id: catid,
      created_at: Date(Date.now()),
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
});

app.get("/display", (req, res) => {
  db("products as p")
    .join("categories as c", "p.category_id", "c.category_id")
    .select(
      "p.product_id",
      "p.product_name",
      "p.price",
      "c.category_name",
      "p.created_at"
    )
    .then((data) => {
      res.render("display", { product: data });
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

app.get("/update", (req, res) => {
  res.render("update");
});

app.post("/search", (req, res) => {
  var input = req.body.input;
  if(input==''){
    res.redirect('/display');
  }
  else{

    db("products as p")
    .join("categories as c", "p.category_id", "c.category_id")
    .where("c.category_name", input)
    .select(
      "p.product_id",
      "p.product_name",
      "p.price",
      "c.category_name",
      "p.created_at"
      )
      .then((data) => {
        res.render("display", { product: data });
      })
      .catch((err) => {
        res.json({ message: err });
      });
    }
  });

app.listen(port, () => {
  console.log(`Running Server is http://localhost:${port}`);
});
