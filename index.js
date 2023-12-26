import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";// it is used to access env file b/c it is in backend

dotenv.config({ path: '../.env' });
 // Load environment variables from .env
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('databse conneted succefully')
}).catch((err)=>{
    console.log(err)
})

const app = express();

app.listen(3000, () => {
    console.log("server is running on port 3000");
});

