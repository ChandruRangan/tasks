 const { Client } = require("pg");
const client=new Client({
    host: "localhost",
    user: "chandru",
    port: 5432,
    password: "12345",
    database: "exam",
});
client.connect();
async function dbcal(query) {
  return new Promise((resolve, reject) => {
    
    client.query(query, (err, res) => {
      if (err) {
        reject(err);
      }
      
      resolve(res.rows);
    });
  });
}
async function exec() {
  const result = await dbcal(
    "select studentid,(sub1+sub2+sub3+sub4+sub5) as total from marks order by studentid desc limit 1;"
  ).then((res)=>{
      console.log(res)
  }).catch((err)=>{
      console.log(err)
  })
  
};
exec(); 