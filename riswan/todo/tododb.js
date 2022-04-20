
  knex('todo').insert({list: 'name'}).returning('*').toString();







// const {Client}=require('pg')

// const data=new Client({
//     host: "localhost",
//     user: "riswan1",
//     port: 5432,
//     password: "Riswan@123",
//     database: "todo",
// });
// data.connect();

// module.exports = {data};

// function action()
// {   
    
//     return new Promise((resolve,reject) => 
//     {
//     data.connect();
//     const ris = `insert into todo values (${addtodobutton})`;
//     data.query(ris, (err, res) => 
//     {
//         if(err)
//         {
//           reject(err);
//         } 
//         else
//         {
//            for (let row of res.rows)
//            {
//                resolve(row);
//            }
//         }
//     data.end();
//     });
//     });
// }
  
// async function main()  
// {
//     const obj=await action();
//     console.log(obj);
// }
// main()