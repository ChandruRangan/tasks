const { db } = require("./dbconfig");
const bodyparser = require("body-parser");
exports.find = async (req, res) => {
  var { catname } = req.body;
  if (catname == "") {
    res.redirect("/display");
  } else {
    await db("products as p")
      .join("categories as c", "p.category_id", "c.category_id")
      .where("c.category_name", catname)
      .select(
        "p.product_id",
        "p.product_name",
        "p.price",
        "c.category_name",
        "p.created_at",
        "p.updated_at"
      )
      .then((data) => {
        db.select("*")
          .from("categories")
          .orderBy("category_name", "asc")
          .then((cat) => {
            res.render("home", { product: data, cat: cat });
          });
      })
      .catch((err) => {
        res.json({ message: err });
      });
  }
};
