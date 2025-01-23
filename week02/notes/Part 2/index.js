const expres = require("express");
const app = expres();
const students = require('./students.json')

app.get('/', (request, response) =>{
    response.send("hello world from express")
})

app.get('/api', (req, res) =>{
    res.send({
        data:students
    })
})

app.get('/feed', (_, res) =>{
    res.send('this is the feed')
})
app.get('/username', (_, res) =>{
    res.send('Its OT')
})
app.use("*", (_, res)=>{
    res.status(404).json({error: "page not found"})
})

app,get('/api/:userId', (req, res)=>{
    const user = students.find(({id})=> id.toString() === req.params.userId);
    
    
})

app.listen(4000, (err)=>{
    if(err){
        console.error('Something went wrong', err);
        return;
    }
    console.log('server running on port 4000');
    
})