import pkg from 'pg';
const { Pool } = pkg;
require('dotenv').config();

const con = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT,
});

con.connect(err => {
    if (err) {
        console.error('Connection error', err.stack);
    } else {
        console.log('Connected');
    }
});

export default con;
