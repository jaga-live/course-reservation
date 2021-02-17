const mongoose = require("mongoose")

var studentSchema = new mongoose.Schema({

name : String,

email : String,

password : String,

registeredCourses : Array 

})

var student = mongoose.model("student",studentSchema)

module.exports = student