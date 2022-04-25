const { db } = require("./dbconfig");

exports.update = async (req, res) => {
  const id = parseInt(req.query.id);
  await db
    .select("*")
    .from("products")
    .where("product_id", id)
    .then((data) => {
        db.select("*")
      .from("categories")
      .then((cat)=>{
          res.render("update", { data: data, id: id,cat:cat });
        })
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.updatedata=(async(req,res)=>{
    let pid=parseInt(req.query.id);
    console.log(pid);
    const pname = req.body.pname;
    const catid = req.body.catid;
    const price = req.body.price;
    db('products')
    .where('product_id', '=',pid)
    .update({
      product_name: pname,
      price: price,
      category_id: catid,
      updated_at: Date(Date.now())    
    }).then(()=>{
      res.redirect('/');
    }).catch(e=>{
      res.status(400).json(e);
    })
  });