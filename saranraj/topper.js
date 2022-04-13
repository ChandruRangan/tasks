const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "saran",
  port: 5432,
  password: "Saran@123",
  database: "js",
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
    "select stuid,name,(tamil+english+maths+science+social) as total from marks order by total desc limit 1;"
  );

  console.log(result);
  return;
}

// dbcal()
//   .then((data) => {
//     console.log(data.rows);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
exec();