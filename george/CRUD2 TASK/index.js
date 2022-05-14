const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(bodyparser.json());
const cookieParser = require("cookie-parser");
const cors = require("cors");
app.use(cors())
const db = require('../CRUD2 TASK/config/database')
require("dotenv").config();
app.use(express.json())
const EmployeeRoute = require('../CRUD2 TASK/Routes/EmployeeRoute')
app.use('/api',EmployeeRoute);
const port = process.env.PORT || 8001
app.listen(port,()=>{
    console.log('App is running at ${port}')
})