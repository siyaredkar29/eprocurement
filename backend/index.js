
const cors = require("cors")
//creating localhost for hosting

const express =require("express")
const mongoose = require("mongoose")
const userRoutes = require("./Routes/userRoutes")

require("dotenv").config()



const app = express();




//middlewares
app.use(cors());
app.use(express.json());



app.get("/",(request,response)=>{
    //response.send("<h1>hello")
})



app.use("/users",userRoutes)


mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("connected")
    app.listen(process.env.PORT,()=>{
        console.log("hosted")
    })
}).catch((e)=>{
    console.log(e)
})

//finish