const { Client } = require('pg');
const client = new Client({
    user: 'karthick',
    host: 'localhost',
    database: 'library',
    password: 'ruthra',
    port: 5432,
});
client.connect();

const query = `select * from students where student_fname='karthick'`;
client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    for (let row of res.rows) {
        console.log(row);
    }
    client.end();
}); 