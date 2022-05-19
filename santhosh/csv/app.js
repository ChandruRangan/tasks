const express = require('express')
const app = express();
const fs = require('fs');
const mongoose = require('mongoose')
const db = require('./models/Dbconfig')

const router = require('./route/router')
const router1 = require('./export/jsontocsv')
app.use('/api', router)
app.use('/getapi', router1)

app.listen(3000, () => {
    console.log(`The port is running in https://localhost:3000`);
});
