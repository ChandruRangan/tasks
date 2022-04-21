const express = require("express");
const app = express();
const port = 5000;
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const knex = require("knex");
const { now } = require("lodash");
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
    .from("products")
    .then((product) => {
      db.select("*")
        .from("categories")
        .orderBy("category_name", "asc")
        .then((data) => {
          res.render("crud", { product: product, cat: data });
        })
        .catch((err) => {
          res.status(400).json({ err });
        });
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
      created_at:Date(Date.now())
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
});

app.listen(port, () => {
  console.log(`Running server is http://localhost:${port}`);
});
