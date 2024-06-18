import mysql from "mysql";
import { config } from 'dotenv';

// Load environment variables from .env file
config();

const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

con.connect(function(err) {
    if(err) {
        console.log("connection error")
    } else {
        console.log("Connected")
    }
})

export default con;