const express = require("express")
const dotenv = require("dotenv")
const connection = require("./config/server")
const studentRouter = require("./routes/studentRoutes")
const app = express()
const cors = require("cors")
require("dotenv").config();

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:3000",],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: 'Content-Type',
    credentials: true
}));

app.use(express.json())

// Add root route
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the Student Information API" });
});

app.use("/studentsinfo", studentRouter)
const PORT = process.env.PORT || 8080;

app.listen(PORT || 8000, async () => {
    try {
        await connection
        console.log(`server is running port on ${PORT || 8000}`)
    } catch (error) {
        console.log(error)
    }
})  
