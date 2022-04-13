const {Client}=require('pg');

const k=new Client({
    user:'karthick',
    password:'ruthra',
    host:'localhost',
    port:'5432',
    database:'exam'
});


const psql=`select s.s_id,s.name,
(javascript+nodejs+ruby) as Total_marks,
'Topper' as grade from students as s inner join marks as m 
on s.s_id=m.s_id where 
(javascript+nodejs+ruby)=(select max(javascript+nodejs+ruby) from marks);`;

async function sucess(){
    k.connect();
    console.log('Sucessfully Connected');
}
sucess().then(
k.query(psql,(err,res)=>{
if(err){
    console.log(err);
}
else{
    for(let row of res.rows){
        console.log(row);     
    }
}
k.end();
})
);
