// const express = require("express")
import express from "express"
import connectDB from "./connection/connection.js"
import authRoute from "./route/authRoute.js"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())
connectDB()
const port = process.env.PORT || 2000

app.use("/api/v1/auth",authRoute)

app.listen(port,()=>{
    console.log(`your backend server is running on port ${port}`);
})