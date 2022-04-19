console.log("server side running");
const axios = require("axios");
const express = require("express");
const app = express();
const { Pool, Client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "saran",
  port: 5432,
  password: "Saran@123",
  database: "js",
});
const pool = new Pool({
  host: "localhost",
  user: "saran",
  port: 5432,
  password: "Saran@123",
  database: "js",
});
client.connect();

 function Getjoke(url) {
  return new Promise((resolve, reject) =>
    axios.get(url).then(
      (response) => {
        resolve(response.data.joke);
        // return StoreInDb(response.data.joke);

        // app.listen(5003);
      },
      (error) => {
        reject(error);
      }
    )
  );
}
async function StoreInDb() {
         
          return new Promise(async(resolve,reject)=>{
            const data = await Getjoke(
              "https://v2.jokeapi.dev/joke/Programming?type=single"
            );
            
            let LastRecord = await dbcal("select no from jokes order by no desc limit 1");
            console.log(LastRecord);
            if (LastRecord[0]) {
               pool.query(
                `INSERT INTO jokes(no,joke)VALUES(${LastRecord[0].no + 1},${
                  "'" + data.replaceAll("'", `"`) + "'"
                })`,
                (err, res) => {
                  console.log(err, res);
                  resolve(data);
                  
                }
              );
              
            } else {
              console.log(data);
          
             pool.query(
                `INSERT INTO jokes(no,joke)VALUES(1,${
                  "'" + data.replaceAll("'", `"`) + "'"
                })`,
                (err, res) => {
                  console.log(err, res);
                  resolve(data);
                }
              );
            
            }
          })
         

}

function dbcal(query) {
  return new Promise((resolve, reject) => {
    client.query(query, (err, res) => {
      if (err) {
        reject(err);
      }
      client.end;
      resolve(res.rows);
    });
  });
}




app.post("/insert", async (req, res) => {
 await StoreInDb()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err));
console.log("hi");
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
});

app.listen(5001);
