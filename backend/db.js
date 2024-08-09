import mysql from "mysql2"


export const db =  mysql.createConnection({
    host : "localhost",
    user : "closet-app-user",
    password: "dosxos-wijta3-somrYr",
    database: "closet_application"

})