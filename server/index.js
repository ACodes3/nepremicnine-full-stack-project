import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoute.js";
import cookieParser from "cookie-parser";

const app = express()
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))
app.use(express.json())
app.use("/auth", adminRouter)
app.use(express.static("Public"))
app.use(cookieParser())

{/*app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is running and connected to the frontend!' });
});*/}

app.listen(3000, () => {
    console.log("Server is running")
})