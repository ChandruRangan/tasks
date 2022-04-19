const {Client}=require('pg')

const data=new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Riswan@123",
    database: "joke",
});
data.connect();




