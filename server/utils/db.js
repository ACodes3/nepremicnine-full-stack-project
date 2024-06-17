import mysql from "mysql";

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "a_real_estate_20240605",
})

con.connect(function(err) {
    if(err) {
        console.log("connection error")
    } else {
        console.log("Connected")
    }
})

export default con;