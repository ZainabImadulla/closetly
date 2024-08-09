import mysql from "mysql2"
import dotenv from 'dotenv';


dotenv.config();

console.log(process.env.MYSQL_ROOT_PASSWORD);

export const db =  mysql.createConnection({
    host : "localhost",
    user : "root",
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: "closet_application"

})