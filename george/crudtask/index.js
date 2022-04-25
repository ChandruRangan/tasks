const express = require(express);
const app = express();
const knes= require (knex);
const db = knex({
    client:'pg',
    connection:{
        host:"localhost",
        user:"george",
        password:123,
        database:"crud"
    }
})
app.get('/',(req,res)=>{
    db.select('*').from('category').then((data)=>{
        res.render('',{data:data});
    })
    .catch(err=>{
        res.status(400).json(err);
    })

    }
})