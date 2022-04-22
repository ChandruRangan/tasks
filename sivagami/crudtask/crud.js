const express = require('express');
const crud = express();
const knex = require('knex');
const bodyparser = require("body-parser");
crud.use(bodyparser.urlencoded({extended:true}));
crud.set('view engine','ejs');
crud.use(bodyparser.json());
const db=knex({
    client:'postgresql',
    connection:{
        host:"localhost",
        user:"postgres",
        password:"123",
        database:"crud",
    },
})
crud.get("/", (req,res)=>{
    db.select("*")
    .form("category")
    .then((data) => {
        res.render("crud",{data:data});
    })
    .catch((err)=>{
        res.status(400).json(err);
    });
});