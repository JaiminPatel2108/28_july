import mongoose from "mongoose"
import dotenv from "dotenv"
const DATA_BASE = process.env.DATA_BASE

dotenv.config()


const connectDB = ()=>{
    mongoose.connect(`mongodb+srv://pjaimind031:jaimin21082002@cluster0.vngpvxa.mongodb.net/new_cluster?retryWrites=true&w=majority`).then(()=>{
        console.log("dabase connected successfully");
    }).catch((e)=>{
        console.log(e);
    })

    // console.log(DATA_BASE);
}

export default connectDB