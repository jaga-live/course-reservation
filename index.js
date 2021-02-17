const express = require("express")
const app = express()


/////Enable Cors
const cors = require("cors")
app.use(cors())


//////Configuration - Express
app.use(express.json({limit : "5mb"}))

/////Start the MongoDB server
require("./database/mongoose")



/////Import all routes
var stdRoute = require("./routes/student")

app.use("/api",[stdRoute])





app.get("/", (req,res)=>{
    res.send("KCE - OOAD - Batch 5")
})


require("dotenv").config()


app.listen(process.env.PORT,()=>{
    console.log("Server is running")
})