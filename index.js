// const express = require("express")
import express from "express"

const app = express()
const port = process.env.PORT || 2000

app.get("/",(req,res)=>{
    res.send("hello from the jaimin")
})

app.listen(port,()=>{
    console.log(`your backend server is running on port ${port}`);
})