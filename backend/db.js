import mysql from "mysql2"

export const db =  mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "nehgyz-qohfoq-1veRci",
    database: "closet_application"

})