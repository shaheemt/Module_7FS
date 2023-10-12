const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const path = require("path");
PORT = 4000
const mongoose = require("mongoose")
const cookieParser = require('cookie-parser')
const router = require('./routes/autRoutes')

mongoose.connect("mongodb://127.0.0.1:27017/userModel")
.then((data)=>{
    console.log(`mongo connected success ${data.connection.host}`);
}).catch((err)=>{
    console.log(err.message);
})


// const userModel = require("./model/db")


dotenv.config({path:"./Config/config.env"});

app.use(express.json())
app.use('/', router)
app.use(cookieParser())
app.use(express.urlencoded({extented:false}))

app.listen(PORT ,()=> {
    console.log(`server runing on port ${process.env.PORT}`);
})