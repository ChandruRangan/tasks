const { Client } = require('pg');
const client = new Client({
    user: 'college',
    host: 'localhost',
    database: 'college',
    password: 'college',
    port: 5432,
});
client.connect();
const query = `select students.name,marks.id,(sub1+sub2+su3+sub4) as total_mark from students inner join marks on students.id=marks.id where(sub1+sub2+su3+sub4)=(select max(sub1+sub2+su3+sub4) from marks)`;
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