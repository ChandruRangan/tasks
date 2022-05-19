const db = require('../DATA_ENTRY/Database/db');
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./Routes/routes');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api',router);
app.listen(5678);