const mongoose = require("mongoose")

var collegeSchema = new mongoose.Schema({

name : String,

email : String,

contact : Number,

collegeId : String

})

var college = mongoose.model("college",collegeSchema)

module.exports = college