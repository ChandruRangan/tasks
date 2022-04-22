const { response } = require("../app");
const { db } = require("../config/database.js");
exports.createProduct = async (req, res) => {
    const { product_name, price,category_id } = req.body;
     await db('product').insert({product_name:product_name,price:price,category_id:category_id,created_at:Date(Date.now()),updated_at:Date(Date.now())}).then(res=>{console.log("inserted")}).catch(err=>console.log(err));
  
    // res.status(201).send({
    //   message: "Product added successfully!",
    //   body: {
    //     product: { product_name, price,category_id, }
    //   },
    // });
    console.log("hi");
  };
  exports.category_name=async(req,res)=>{
       const { category_id }=req.body;
       await db('categories').select('category_name').where('category_id',category_id).then((response)=>{req.send(response)});
  };

  exports.deleteProductById = async (req, res) => {
    const productId = parseInt(req.params.id);
    await db.query('DELETE FROM products WHERE productId = $1', [
      productId
    ]);
  
    res.status(200).send({ message: 'Product deleted successfully!', productId });
  };