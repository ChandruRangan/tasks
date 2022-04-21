const { Client } = require("pg");
 const client=new Client({
     host: "localhost",
     user: "chandru",
     port: 5432,
     password: "12345",
     database: "exam",
 });
 client.connect();
 const query = `select students.studentname,marks.studentid,(sub1+sub2+sub3+sub4+sub5) as total_mark from students inner join marks on students.studentid=marks.studentid where(sub1+sub2+sub3+sub4+sub5)=(select max(sub1+sub2+sub3+sub4+sub5) from marks)`;
 client.query(query, (err, res) => {
     if (err) {
         console.error(err);0
         return;
     }
     for (let row of res.rows) {
         console.log(row);
     }
     client.end();
 });