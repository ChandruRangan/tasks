const express = require('express');
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(bodyparser.json());
const db = require('./models/Dbconfig')
const EmployeeRoute = require('./controller/Employee.controller');
const ProjectRoute = require('./controller/project.controller')

app.use('/', EmployeeRoute);
app.use('/', ProjectRoute);

app.listen(4000, () => {
    console.log(`The running port is http://localhost:4000`)
});
