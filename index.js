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

app.listen(5000,()=>{
    console.log("Server is running")
})