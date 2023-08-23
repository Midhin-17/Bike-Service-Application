import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./auth.js"
import bookingRoute from "./booking.js"
import adminRoute from "./admin.js"



const app = express();
dotenv.config();

//connecting port form .env
const PORT= process.env.PORT;


//connecting mongoDB api using mongoose

const connect= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to mongoDB");
    }catch(err){
        throw(err);
}
};
//middleware connection
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/booking",bookingRoute);
app.use("/api/admin",adminRoute);




// app.get('/', function(req, res){
//     res.send("hello world!");
// });

//connecting backend in port 
app.listen(PORT,() =>{
    connect() 
    console.log(`listening on the ${PORT}`)
});
