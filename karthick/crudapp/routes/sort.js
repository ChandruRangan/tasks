const { db } = require("./dbconfig");

exports.pidasc = async (req, res) => {
  const { pid } = req.query;
  await db("products as p")
    .join("categories as c", "p.category_id", "c.category_id")
    .select(
      "p.product_id",
      "p.product_name",
      "p.price",
      "c.category_name",
      "p.created_at",
      "p.updated_at"
    )
    .orderBy(pid)
    .then((data) => {
      db.select("*")
        .from("categories")
        .orderBy("category_name", "asc")
        .then((cat) => {
          res.render("home", { product: data, cat: cat });
        });
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

exports.pnasc = async (req, res) => {
  const { pn } = req.query;
  await db("products as p")
    .join("categories as c", "p.category_id", "c.category_id")
    .select(
      "p.product_id",
      "p.product_name",
      "p.price",
      "c.category_name",
      "p.created_at",
      "p.updated_at"
    )
    .orderBy(pn)
    .then((data) => {
      db.select("*")
      .from("categories")
      .orderBy("category_name", "asc").then((cat)=>{
      res.render("home", { product: data,cat:cat});
    })
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

exports.priceasc = async (req, res) => {
  const { price } = req.query;
  await db("products as p")
    .join("categories as c", "p.category_id", "c.category_id")
    .select(
      "p.product_id",
      "p.product_name",
      "p.price",
      "c.category_name",
      "p.created_at",
      "p.updated_at"
    )
    .orderBy(price)
    .then((data) => {
      db.select("*")
      .from("categories")
      .orderBy("category_name", "asc").then((cat)=>{
      res.render("home", { product: data,cat:cat});
    })
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

exports.catasc = async (req, res) => {
  const { cat } = req.query;
  await db("products as p")
    .join("categories as c", "p.category_id", "c.category_id")
    .select(
      "p.product_id",
      "p.product_name",
      "p.price",
      "c.category_name",
      "p.created_at",
      "p.updated_at"
    )
    .orderBy(cat)
    .then((data) => {
      db.select("*")
      .from("categories")
      .orderBy("category_name", "asc").then((cat)=>{
      res.render("home", { product: data,cat:cat});
    })
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};
