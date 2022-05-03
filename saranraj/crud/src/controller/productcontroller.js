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
      "p.created_at"
    )
    .then((data) => {
      res.render("index", { elements: data });
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
   } 
exports.categoriesName=async(req, res) => { 
  db.select('*').from('categories').then((data)=>{
   res.render('insert',{elements:data});
  }).catch(err => res.status(400).json(err));
}
exports.deleteProductById = async (req, res) => {
    const productId = req.query.id;
    await db('product').where('product_id',productId).del();
    res.redirect('/');
  };
exports.updateProduct = async (req, res) => {
    const productId = req.query.id;
    db("product as p")
    .join("categories as c", "p.category_id", "c.category_id")
    .select(
      "p.product_id",
      "p.product_name",
      "p.price",
      "p.category_id",
      "c.category_name",
      "p.updated_at",
    ).where('p.product_id',productId)
    .then((data) => {
      db('categories').select('category_name','category_id').then((category)=>{
        console.log(data),console.log(category);
        res.render("update", { elements: data,elementscat:category });
      })
      
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
  
  };
exports.updateProductByID=async(req,res)=>{
  const { product_name,product_id, price,category_id } = req.body;
   await  db('product').where('product_id',product_id).update({
       product_name:product_name,
       price:price,
        category_id:category_id,
        updated_at:Date(Date.now())
     }).returning('*').then((data)=>{
       console.log(data)
     })
     
}