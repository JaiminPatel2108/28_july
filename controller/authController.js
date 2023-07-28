import express from "express"
import User from "../model/user.js"

export const registerUser = async(req,res)=>{
    try {
        const {name,email,mobile,subject,message} = req.body
        
        if(!name || !email || !mobile || !subject || !message){
            res.send({
                success: false,
                message: "feilds can't be empty"
            })
        }

        const user = new User({name,email,mobile,subject,message})
        await user.save()
        res.send({
            success: true,
            message: "User Register Successfully",
            user
        })
        // res.send({name,email,mobile,subject,message})
    } catch (error) {
        res.send({
            success: false,
            message: "Error in register catch",
            error
        })
    }
}

export const getUsers = async(req,res)=>{
    try {
        const users = await User.find()
        res.send({
            success: true,
            message: "user getting successfully",
            users
        })
    } catch (error) {
        res.send({
            success: false,
            message: "error in getUsers catch",
            error
        })   
    }
}