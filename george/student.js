const {Client}=require('pg')
 const client = new Client(
     {
         host:"localhost",
         user:"postgres",
         port:5432,
         password:'123',
         database:"postgres"
     }
 )
 client.connect();
 client.query('select student_mark.student_id,student.name,(science+math+english) as total from student_mark inner join student on student.student_id=student_mark.student_id where(science+math+english)=(select max(science+math+english) from student_mark);',(err,res)=>{
     if(!err){
         console.log(res.rows);
     }else
     {
         console.log(err.message);
     }
 client.end;
 })














