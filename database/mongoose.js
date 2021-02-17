const mongoose = require("mongoose")

require("dotenv").config()

let url = process.env.DB

mongoose.connect(url,{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
},(err,res)=>{

if(err) console.log("Cannot Connect to MongoDB Atlas Server")
if(res) console.log("MongoDB Atlas Server Connected")

})