const { db } = require("./dbconfig");

exports.deletefn=(async(req, res) => {
  const  id  = parseInt(req.query.id);
  console.log(id);
  await db("products")
    .where("product_id", id)
    .del()
    .then(() => {
        res.redirect('/');
    }).catch(err=>{
        res.status(400).json(err);
    });
});
