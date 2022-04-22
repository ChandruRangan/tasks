const express = require("express");
const app = express();
const port = 9000;
const knex = require("knex");
const axios = require("axios");
app.set("view engine", "ejs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "muthus",
    password: "muthu@904743",
    database: "product",
  },
});
app.get("/", (req, res) => {
  axios
    .get("product")
    .then((results) => {
      var product = results.data.product;
      console.log(product);
      res.render("products", { product: product });
    });
});

app.post("/insert", (req, res) => {
  const {product}=req.body;
  db("product")
    .insert({ category_name: product })
    .returning("*")
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      res.status(400).json({ message: "unable to insert" });
    });
});

app.get("/display", (req, res) => {
  db.select("*")
    .from("product")
    .then((data) => {
      res.render("display", { data: data });
    })
    .catch((err) => res.status(400).json(err));
});

app.listen(port, () => {
  console.log("The running port is http://localhost:" + `${port}`);
});








