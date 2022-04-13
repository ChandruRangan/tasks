const  {Pool} = require('pg');
const pool = new Pool({
    user : 'santhosh',host: 'localhost',database:'studetndb',password:'santhosh123',port:'5432'
});
function call(q){
    return new Promise((ress, rej)=>{
        pool.connect();
        pool.query(q,(err,res) => {
            if(err){
                rej(err);
            }
            pool.release;
            ress(res.rows);
        });
    });
}
async function result(){
    const a = await call(`select m.s_id,n.name,(java+python+ruby) as total,'Topper' as grade from marks as m inner join students as n on n.s_id=m.s_id where (java+python+ruby)=(select max(java+python+ruby) from marks);`);
    console.log(a);
    return ;
    
}
result()





// const query =`select m.s_id,n.name,(java+python+ruby) as total,'Topper' as grade from marks as m inner join students as n on n.s_id=m.s_id where (java+python+ruby)=(select max(java+python+ruby) from marks);`;
// (async () => {                              //async function
//     try {
//         const client = await pool.connect();
//         const res = await client.query(query);
//         client.release(1000);

//         for (let row of res.rows) {
//             console.log(row);
//         }
//     } catch (err) {
//         console.error(err);
//     }
  

// })()
// client.query(query, (err, res) => {           //callback function
//     if(err){
//         console.log(err);
//         return;
//     }
//     for (let row of res.rows){
//         console.log(row);
//     }
//     client.end();
// })