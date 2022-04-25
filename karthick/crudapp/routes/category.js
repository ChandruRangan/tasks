const {db}=require('./dbconfig');
exports.category=(async (req, res) => {
    await db.select("*")
      .from("categories")
      .orderBy("category_name", "asc")
      .then((data) => {
        res.render("insert", { cat: data });
      })
      .catch((err) => {
        res.status(400).json({ err });
      });
  });