'use strict'
const express = require('express');
const app = express();
const cars = require('./cars.json')

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});
app.get("/api", (request, response) => {
  response.send({
    data: {
      message: "Hello from Api!",
    },
  });
});

app.get("/api/cars", (req, res) => {
    res.status(200).json({
        data: cars,
    })
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, err=>{
    if(err){
        console.error('something went wront', err);
        
    }
    console.log("server running at port " + PORT);
    
})