const students = require("./students.json");

students.forEach(student => {
    console.log("Hello " + student.firstName + " " + student.lastName)
})

console.log("\n");


const studentsStartingWithD = students.filter(student => student.lastName.startsWith("D"));
const countOfStudents = studentsStartingWithD.length;
console.log("Count of last names starting with D is " + countOfStudents);


console.log("\n");

const emailArr = students.map(firstName => {
    return `${firstName}@algonquincollege.com`
})

console.log(emailArr);