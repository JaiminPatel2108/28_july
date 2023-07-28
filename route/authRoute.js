import express from "express"
import { getUsers, registerUser } from "../controller/authController.js"

const Router = express.Router()

Router.get("/",(req,res)=>{
    res.send("welcome from the jaimin agin")
})

Router.post("/register",registerUser)

Router.get("/getUsers",getUsers)

export default Router
