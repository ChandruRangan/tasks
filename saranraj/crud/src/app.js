const express = require('express');
const app = express();
app.set('view engine','ejs');
const productcontrol=require('./controller/productcontroller');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.get('/', productcontrol.listproducts);
app.get('/insert', productcontrol.categoriesName);
app.post('/products',productcontrol.createProduct);
app.get('/delete',productcontrol.deleteProductById);
app.get('/update',productcontrol.updateProduct);
app.post('/update',productcontrol.updateProductByID);
   
module.exports = app;