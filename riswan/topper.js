const {Client}=require('pg')

const data=new Client({
    host: "localhost",
    user: "riswan1",
    port: 5432,
    password: "Riswan@123",
    database: "topper",
});
data.connect();

const query = `select mark.std_id,student.student_name,(tamil+english+maths+science+social) as total from mark inner join student on student.student_id=mark.std_id where(tamil+english+maths+science+social)=(select max(tamil+english+maths+science+social) from mark);`;

data.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    for (let row of res.rows) {
        console.log(row);
    }
    data.end();
});
