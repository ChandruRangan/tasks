const { Client } = require("pg");

const k = new Client({
  user: "karthick",
  password: "ruthra",
  host: "localhost",
  port: "5432",
  database: "exam",
});

function db(dbquery) {
  return new Promise((value, error) => {
    k.connect();
    k.query(dbquery, (err, res) => {
      if (err) {
        error(err);
      } else {
        console.log("Sucessfully Connected");
        for (let row of res.rows) {
          value(row);
        }
      }
      k.end();
    });
  });
}

async function run() {
  const result = await db(`select s.s_id,s.name,
(javascript+nodejs+ruby) as Total_marks,
'Topper' as grade from students as s inner join marks as m 
on s.s_id=m.s_id where 
(javascript+nodejs+ruby)=(select max(javascript+nodejs+ruby) from marks);`);
  console.log(result);
  return;
}

run();
