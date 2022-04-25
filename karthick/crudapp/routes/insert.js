const { db } = require("./dbconfig");
const bodyparser=require('body-parser');
exports.insertfn=(async (req, res) => {
    const pname = req.body.pname;
    const catid = req.body.catid;
    const price = req.body.price;
   await db("products")
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