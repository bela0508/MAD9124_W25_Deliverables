const http = require('http');
const students = require("../../../week01/Exercice/students.json")

const server = http.createServer((request,response) => {
if (request.url === '/feed')
    request.write('this is your news feed;')
else if(request.url === '/username')
    response.write('tim')
else if(request.url === "/api"){
    response.setHeader('Content-Type' , 'application/json')
    response.write(JSON.stringify(students))
}
else
    response.write("hello world from node.js")
    response.end();
})

server.listen(4000, err=>{
    if (err){
        console.error("smthng wrong", err);
    return;
    }
     console.log('server running o port 4000');
        
})