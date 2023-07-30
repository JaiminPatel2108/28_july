import mongoose from "mongoose"
import dotenv from "dotenv"
// const DATABASE = process.env.REACT_APP_DATABASE

dotenv.config()


const connectDB = ()=>{
    mongoose.connect(`${process.env.REACT_APP_DATABASE}`).then(()=>{
        console.log("dabase connected successfully");
    }).catch((e)=>{
        console.log(e);
    })

    // console.log(process.env.REACT_APP_DATABASE);
}

export default connectDB