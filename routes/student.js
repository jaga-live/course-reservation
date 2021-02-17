const router = require("express").Router()


/////databse Models
const Student = require("../models/student")
const College = require("../models/college")
const Course = require("../models/course")


//////Login student
router.post("/login",async(req,res)=>{
const {email,password} = req.body

try {

    var stdCheck = await Student.findOne({email,password})

    if(stdCheck === null) return res.status(401).send("Invalid Email Or Password")

    return res.send(stdCheck)
    
} catch (error) {

    return res.status(400).send("Error")
    
}


})




//////Choose a college
router.get("/college/list", async(req,res)=>{
    try {
        
            var college = await College.find({})
            res.send(college)

    } catch (error) {
        return res.status(400).send("Error")
        
    }
})



//////List Courses available
router.get("/college/:id", async(req,res)=>{

    try {

        var course = await Course.find({collegeId : req.params.id})
        res.send(course)

    } catch (error) {

        return res.status(400).send("Error")
        
    }

})



/////register for course
router.post("/course/register", async(req,res)=>{
    
})








var test = ()=>{
     Course.insertMany([
        {
            name : "Software Engineering",
            description : "Agile - Waterfall - Scrum Master",
            seatsAvailable : 20,
            collegeId : "kce",
            professor : "Rahul Thomas"
        },
        {
            name : "R programming",
            description : "The fundamentals of R programming Language",
            seatsAvailable : 10,
            collegeId : "psg",
            professor: "Arjun"
        },
        {
            name : "Kotlin",
            description : "Create advanced apps using Kotlin",
            seatsAvailable : 8,
            collegeId : "cit",
            professor :"Christopher Ceze"
        },
        {
            name : "Angular Js",
            description : "Intermediate Angular Framework Course",
            seatsAvailable : 14,
            collegeId : "skcet",
            professor : "Varun"
        },
       
    ])
}

// test()







module.exports = router