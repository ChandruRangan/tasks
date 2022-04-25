const {db}=require('./dbconfig');

exports.products=(async (req, res) => {
    await db("products as p")
    .join("categories as c", "p.category_id", "c.category_id")
    .select(
      "p.product_id",
      "p.product_name",
      "p.price",
      "c.category_name",
      "p.created_at",
      "p.updated_at",
    )
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
});

