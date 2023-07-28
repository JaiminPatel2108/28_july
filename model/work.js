import mongoose from "mongoose"

const workSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }, 
    mobile: {
        type: Number,
        require: true
    }, 
    subject: {
        type: String,
        require: true
    }, 
    projectDescription: {
        type: String,
        require: true
    }
},{timestamps: true})

const Work = mongoose.model("Work",workSchema)

export default Work