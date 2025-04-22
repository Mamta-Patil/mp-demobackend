const express= require("express")
const { createStudentInfo, getStudentsInfo, delateStudentData, updateStudentInfo, GetSingleStudentInfo } = require("../controllers/studentsController")
const app=express()
// app.use(express())
const studentRouter=express.Router()

studentRouter.post("/create",createStudentInfo)
studentRouter.get("/get",getStudentsInfo)
studentRouter.delete("/delete/:_id",delateStudentData)
studentRouter.get("/getsinglestudentinfo/:_id",GetSingleStudentInfo)
studentRouter.patch("/update/:_id",updateStudentInfo)

module.exports=studentRouter


// https://mp-demobackend-production.up.railway.app/studentsinfo/getalldata