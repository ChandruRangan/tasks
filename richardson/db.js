const { Client } = require('pg');
const client = new Client({
    user: 'stchool',
    host: 'localhost',
    database: 'school',
    password: 'richu',
    port: 5432,
});
client.connect();