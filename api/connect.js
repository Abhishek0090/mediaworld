import mysql2, { createConnection } from 'mysql2';


const db  = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"abhishek",
    database:"social"
})

export default db;