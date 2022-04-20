const {Client}=require('pg')

const data=new Client({
    host: "localhost",
    user: "riswan1",
    port: 5432,
    password: "Riswan@123",
    database: "topper",
});



function dob()
{   
    
    return new Promise((resolve,reject) => 
    {
    data.connect();
    const ris = `select mark.std_id,student.student_name,(tamil+english+maths+science+social) as total from mark inner join student on student.student_id=mark.std_id where(tamil+english+maths+science+social)=(select max(tamil+english+maths+science+social) from mark);`;
    data.query(ris, (err, res) => 
    {
        if(err)
        {
          reject(err);
        } 
        else
        {
           for (let row of res.rows)
           {
               resolve(row);
           }
        }
    data.end();
    });
    });
}
  
async function main()  
{
    const obj=await dob();
    console.log(obj);
}
main()