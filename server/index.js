import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const databaseUrl = process.env.DATABASE_URL;

app.get('/', (req, res) =>{
    res.send("Corriendo")
})

app.use(cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}))

app.use(cookieParser());
app.use(express.json());

const server = app.listen(port, () =>{
    console.log(`Server is running at localhost:${port}`)
})

mongoose.connect(databaseUrl).then(() =>{
    console.log('DB CONNECTION SUCCESFULL')
}).catch((err) =>{
    console.log(err.message)
})