import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import db from "./src/config/db.js";
import indexRouter from "./src/routes/index.route.js";

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json())

app.set("PORT", process.env.PORT || 4000)

app.listen(app.get("PORT"), () => {
    console.log("Escuchando en el puerto "+ app.get("PORT"));
})

app.use("/", indexRouter)

app.use("*", (req, res) => {
    res.status(400).json("Este endpoint no existe")
})


db.connect()
.then(() => {
    console.log("Base de datos conectada");
})
.catch((err) => {
    console.error(err)
})