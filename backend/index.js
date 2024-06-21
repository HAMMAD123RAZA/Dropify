import express from "express";
import nodemon from "nodemon";
import cors from "cors";
import mysqlConnection from "./Connection.js";
import { createProduct, getProduct } from "./controllers/productControllers.js";
import { login, signUp } from "./controllers/userController.js";


const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.get("/",getProduct)
app.post("/create", createProduct)
app.post("/login",login)
app.post("/register", signUp)


app.listen(4040, () => {
    console.log("Server is running on port 4040");
});
