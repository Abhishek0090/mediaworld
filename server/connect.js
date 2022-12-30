import mysql2, { createConnection } from 'mysql2';

const dbname = process.env.DATABASE;

const db  = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"abhishek",
    database:dbname
})

export default db;