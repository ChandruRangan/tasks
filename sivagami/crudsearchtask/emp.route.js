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

// import Employee controller

var Employeecontroller = require('./Empcontroller');

// Employee routes

router.route('/Emptable')
.get(Employeecontroller.app)
.post(Employeecontroller.new);

router.route('/Emptable/:Employee_id')
.get(Employeecontroller.view)
.patch(Employeecontroller.update)
.put(Employeecontroller.update)
.delete(Employeecontroller.delete);


module.exports=router;