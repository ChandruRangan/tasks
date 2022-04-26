const express = require("express");
const app = express();
const knex = require("knex");
const port = 1235;
const axios = require("axios");
app.set("view engine","ejs");
const bodyparser = require("body-parser");
app.use (bodyparser.urlencoded({extended:true}));

const db=knex({
client:'pg',
connection:{
  host:'localhost',
  user:'postgres',
  password:'123',
  database:'projokes'
}
});
  app.get ('/',(req,res) =>{
      axios.get("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((result) => {
      var joke = result.data.joke;  
      res.render("display",{joke:joke})
      })
  })
  app.post('/insert',(req,res) =>{
      const { joke } = req.body;
      console.log(joke);
     db.select('jokes').insert({jokes:joke}).then(()=>{
       res.redirect('/');
     }).catch(e=>{
       res.status(400).json(e);
     });
      });
      app.listen(port, () => {
        console.log("The running port is http://localhost:" + `${port}`);
      });
      