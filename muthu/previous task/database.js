const { Client } = require("pg");
const client=new Client({
    host: "localhost",
    user: "muthus",
    port: 5432,
    password: "muthu@904743",
    database: "studentinfo",
});
function dbcal(query) {
  return new Promise((resolve, reject) => {
    client.connect();
    client.query(query, (err, res) => {
      if (err) {
        reject(err);
      }
      client.end;
      resolve(res.rows);
    });
  });
}
async function exec() {
  const result = await dbcal(
    "select mid,(sub1+sub2+sub3+sub4) as total from mark order by mid desc limit 1;"
  );
  console.log(result);
  return;
}
exec();

