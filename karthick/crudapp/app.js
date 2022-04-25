const express = require("express");
const app = express();
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
const {db} = require("./routes/dbconfig");
const {category}=require('./routes/category');
const {products}=require('./routes/products');
const {deletefn}=require('./routes/delete');
const {insertfn}=require('./routes/insert');
const {update}=require('./routes/update');
const {updatedata}=require('./routes/update');
const {pidasc}=require('./routes/sort');
const {pnasc}=require('./routes/sort');
const {priceasc}=require('./routes/sort');
const {catasc}=require('./routes/sort');
const {find}=require('./routes/find');
app.set("view engine", "ejs");

app.get("/",products);
app.get('/insert',category);
app.post('/inserted',insertfn);
app.get('/update',update);
app.post('/updatedata',updatedata);
app.get('/delete',deletefn);
app.post('/find',find);
app.get('/pidasc',pidasc);
app.get('/pnasc',pnasc);
app.get('/priceasc',priceasc);
app.get('/catasc',catasc);
app.listen(5000,()=>{
    console.log(`Running port is http://localhost:5000`);
});

