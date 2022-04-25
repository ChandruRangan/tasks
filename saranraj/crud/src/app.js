const express = require('express');

const app = express();
app.set('view engine','ejs');

const { db } = require('./config/database.js');
const productcontrol=require('./controller/productcontroller');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.get('/', productcontrol.listproducts);
app.get('/insert', productcontrol.insertproduct);
app.post('/products',productcontrol.createProduct);
app.get('/delete',productcontrol.deleteProductById);
app.get('/update',productcontrol.updateProductById);
   
module.exports = app;