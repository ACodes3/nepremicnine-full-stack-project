import pkg from 'pg';
const { Pool } = pkg;

const con = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'a_real_estate_20240605',
    port: 5432, // default port for PostgreSQL
});

con.connect(err => {
    if (err) {
        console.error('Connection error', err.stack);
    } else {
        console.log('Connected');
    }
});

export default con;
