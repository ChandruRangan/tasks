const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "shan",
  host: "localhost",
  database: "postgres",
  password: 12345,
  port: 5432
});
const axios = require('axios');
let k;


axios.get(' https://v2.jokeapi.dev/joke/Programming?type=single')
  .then( (response)=> {
     k=response.data.joke;
    // console.log(response);
    pool.query(`insert into joke values(1,${"'"+k.replaceAll("'",'"')+"'"})`);
 
console.log(k);

  })
  .catch(function (error) {

    console.log(error);
  })




// const url='https://v2.jokeapi.dev/joke/Programming?type=single';

// fetch(url)
// .then((response)=>
// {
//     console.log(response);
//   // return  response.json();

// })
// .then((parsedData)=>
// {
//     console.log(parsedData);
// }).catch((err)=>{
//   console.log(err)
// })


// const link='https://v2.jokeapi.dev/joke/Programming?type=single';

// fetch(link)
// .then((pass)=>
// {
// return pass.json();
// })

// .then((afterPass)=>
// {
//   console.log(afterPass);
// });


// const url = ' https://v2.jokeapi.dev/joke/Programming?type=single';

// fetch(url)
// .then((result)=>
// {
//  return result.json();
// })
// .then((another)=>
// {
//   console.log(another);

// })


 


//insert into tb values(d,g)