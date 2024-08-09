import mysql from "mysql2"
import dotenv from 'dotenv';


dotenv.config();

console.log(process.env.MYSQL_ROOT_PASSWORD);

export const db =  mysql.createConnection({
    host : "localhost",
    user : "closet-app-user",
    password: "dosxos-wijta3-somrYr",
    database: "closet_application"

})