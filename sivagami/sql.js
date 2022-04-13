const {Client}=require('pg')

const client = new Client(
    {
        host:"localhost",
        user:"siviii",
        port:5432,
        password:'123',
        database:"siviidb"
    }
)


client.connect();

client.query('select mark.student_id,studentt.student_name,(tamil+english+maths+science+social) as total from mark inner join studentt on studentt.student_id=mark.student_id where (tamil+english+maths+science+social)=(select max(tamil+english+maths+science+social) from mark);',(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else
    {
        console.log(err.message);
    }
  
    
client.end;
})