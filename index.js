dotenv.config();
import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import cors from "cors";
import DBConnection from "./database/db.js";
const app = express();
const PORT = process.env.PORT||8000
app.use(cors());
app.use("/",router);
DBConnection();

app.listen(PORT,() => console.log("server running on port 8000"))