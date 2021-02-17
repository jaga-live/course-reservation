const mongoose = require("mongoose")

var courseSchema = new mongoose.Schema({

name : String,

description : String,

seatsAvailable : Number,

collegeId : String,

professor : String

})

var course = mongoose.model("course",courseSchema)

module.exports = course