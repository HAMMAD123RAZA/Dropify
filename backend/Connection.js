
import mysql2 from "mysql2";

const mysqlConnection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "water"
});

mysqlConnection.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {
        console.log("Connected to the database");
    }
});


export default mysqlConnection;