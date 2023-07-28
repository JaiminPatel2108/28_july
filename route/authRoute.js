import express from "express"
import { getUsers, getWorks, hireme, registerUser } from "../controller/authController.js"

const Router = express.Router()

Router.get("/",(req,res)=>{
    res.send("welcome from the jaimin agin")
})

Router.post("/register",registerUser)

Router.get("/getUsers",getUsers)

Router.post("/hireme",hireme)

Router.get("/works",getWorks)

export default Router
