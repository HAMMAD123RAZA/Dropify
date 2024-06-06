import express from "express";
import nodemon from "nodemon";
import cors from "cors";
import mysql2 from "mysql2";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


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

app.get("/",(req,res)=>{
    const sql="SELECT * FROM name";
    mysqlConnection.query(sql,(err,data)=>{
        if(err) throw err;
        res.json(data);
    })
})

app.listen(4040, () => {
    console.log("Server is running on port 4040");
});

export default mysqlConnection;