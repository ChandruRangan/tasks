
const { Client } = require('pg');
const client = new Client({
    user: 'kaviya',
    host: 'localhost',
    database: 'student',
    password: 'kaviya06*',
    port: '5432',
});
const query = `select * from student_details`;
async function dbconnect() { 
    try {
       const con=await client.connect();
       const res = await con.query(query); 
    //    con.release(3000);

       for (let row of res.rows) {
          console.log(row);
        }
    }    
    catch (err) {
        console.error(err);
    }
    // return response.rows;
  }
// client.query(query, (err, res) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     for (let row of res.rows) {
//         console.log(row);
//     }
//     client.end();
// });