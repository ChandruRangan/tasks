const express = require("express");
const { Employee } = require("./model/EmpModel");
const app = express();
const router = require('express').Router();

router.get('/', function (req, res) {
  res.json({
      status: 'API Its Working',
      message: 'Welcome to RESTHub crafted with love!'
  });
});

// router.post()






   module.exports=router;