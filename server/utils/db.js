import { Client } from 'pg';

const con = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'real-estate-db',
});

con.connect(err => {
    if (err) {
        console.error('Connection error', err.stack);
    } else {
        console.log('Connected');
    }
});

export default con;
