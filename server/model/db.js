const mongoose = require("mongoose")
const {Schema} = mongoose

// mongoose.connect("mongodb://127.0.0.1:27017/userModel",  {useNewUrlparser:true}, {useUnifiedTopology:true})
// .then((data)=>{
//     console.log(`mongo connected success ${data.connection.host}`);
// }).catch((err)=>{
//     console.log(err.message);
// })

const userSchema = new Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,

}) 

const userModel = new mongoose.model("user",userSchema)

module.exports = userModel;