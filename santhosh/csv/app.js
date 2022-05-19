const express = require('express')
const app = express();
const fs = require('fs');
const mongoose = require('mongoose')
const db = require('./models/Dbconfig')

const router = require('./route/router')
app.use('/api', router)

app.listen(3000, () => {
    console.log(`The port is running in https://localhost:3000`);
});
