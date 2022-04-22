const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.view("view engine","ejs");
const knex = require('knex');
const db = knex({
    client: 'pg',
    connection: {
        host: "localhost",
        user: "postgres",
        password: "123"
        database: "Todo",
    }
})
app.get("/view.ejs",(req,res)=>{
     const Tasks = res.body.form3;
     db("Todo")
      .insert({task:Tasks})
      .returning("*")
      .then(() =>{
          res.redirect("/view.ejs");
      })
      .catch(errr=>{
          res.status(400).json({ message: "unable to insert" })
      });
})

app.listen(port, () => {
    console.log("The running port is http://localhost:" + `${port}`);
  });
