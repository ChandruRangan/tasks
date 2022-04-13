const {Client}= require('pg')
const client = new Client(
    {
        host:"localhost",
        user:"sharmii",
        port:5432,
        password:1323,
        database:"vsharmidb"
    }
)


client.connect();

client.query('select * from mark;'
,(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else
    {
        console.log(err.message);
    }
  
    client.end()
})