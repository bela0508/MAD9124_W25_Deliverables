import { students, } from "./Students";

function studentSaySmthng(){
    students.forEach(student => {console.log("Hello World, my name is " + student.firstName + student.lastName + ".")})
}

saySmthng("Hello, World!" + students)