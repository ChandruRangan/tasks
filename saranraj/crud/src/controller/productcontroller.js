// const { response } = require("../app");

const { db } = require("../config/database.js");
exports.createProduct = async (req, res) => {
    const { product_name, price,category_id } = req.body;
     await db('product').insert({product_name:product_name,price:price,category_id:category_id,created_at:Date(Date.now()),updated_at:Date(Date.now())}).then(res=>{console.log("inserted")}).catch(err=>console.log(err));
  
    console.log("hi");
  };
 exports.listproducts= async  (req, res) => {
  db("product as p")
    .join("categories as c", "p.category_id", "c.category_id")
    .select(
      "p.product_id",
      "p.product_name",
      "p.price",
      "c.category_name",
      
      "p.updated_at",
    )
    .then((data) => {
      res.render("index", { elements: data });
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
   } 
 exports.insertproduct=async(req, res) => { 
  db.select('*').from('categories').then((data)=>{
   res.render('insert',{elements:data});
  }).catch(err => res.status(400).json(err));
}

  exports.deleteProductById = async (req, res) => {
    const productId = req.query.id;
    await db('product').where('product_id',productId).del();
    res.redirect('/');
  };
  exports.updateProductById = async (req, res) => {
    const productId = req.query.id;
    
  
  };