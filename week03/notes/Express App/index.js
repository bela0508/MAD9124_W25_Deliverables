'use strict'
const express = require('express');
const app = express();
const students = require('./students.json')

app.use(express.json())

app.get("/api/students", (req, res) => {
    res.status(200).json({
        data: students,
    })
}); // return a collection of students

app.get("/api/students/:id", (req, res) => {
    const studentId= req.params.id;
    const student = students.find((s)=> s.id === parseInt(studentId,10))

    if(!student){
        res.status(404).json({
            error: `student with id ${studentId} not found`
        })
        return;
    }
    res.json({
        data:student,
    })
}); // return the student matching the id value

app.post("/api/students/", (req, res) => {
    //find new student
    const newStudent = {
        ...req.body,
        id: Date.now(),
    }
    console.log(newStudent);
    
    //save new student
    students.push(newStudent);

    //respond with new student and its id
    res.status(201).json({
        data:newStudent,
    })

}); // create a new student

app.put("/api/students/:id", (req, res) => {
    const{id}  = req.id;
    const foundStudent = students.find(
        (student) => student.id === parseInt(id,10)
    );

    if(!foundStudent){
        res.status(404).json({
            error: `student with id ${id} not found`
        })
    }
    return;

    const {firstName, lastName} = req.body;
    foundStudent.firstName = firstName
    foundStudent.lastName = lastName

    res.json({
        data:foundStudent
    });
})// replace all properties of a student



app.patch("/api/students/:id", (req, res) => {
    
}); // update some properties of a student
// app.delete("/api/students/:id", (req, res) => {}); // destroy the record for a student

const PORT = process.env.PORT || 4000;

app.listen(PORT, err=>{
    if(err){
        console.error('something went wront', err);
        
    }
    console.log("server running at port " + PORT);
    
})