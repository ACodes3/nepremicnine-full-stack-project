import { Client } from 'pg';

const con = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'a_real_estate_20240605',
});

con.connect(err => {
    if (err) {
        console.error('Connection error', err.stack);
    } else {
        console.log('Connected');
    }
});

export default con;
