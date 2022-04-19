
const { Client } = require('pg');
const client = new Client({
    user: 'kaviya',
    host: 'localhost',
    database: 'student',
    password: 'kaviya06*',
    port: '5432'
});
let promise = new Promise(function(resolve, reject){ 
    const query = `select * from student_details`;
client.query(query, (err, res) => {
    client.connect();
    if (err) {
        reject(err)
    }
    client.end;
    resolve(res.row);
});
});
async function exec(){
    promise
   .then(function () {
      console.log('Successful');
   })
   .catch(function () {
      console.log('Some error has occured');
   });

}
// const query = `select * from student_details`;
// async function dbconnect() { 
//     try {
//        const con=await client.connect();
//        const res = await con.query(query); 
//        con.release(3000);

//        for (let row of res.rows) {
//           console.log(row);
//         }
//     }    
//     catch (err) {
//         console.error(err);
//     }
//     // return response.rows;
//   }