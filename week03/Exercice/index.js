'use strict'
const express = require('express');
const app = express();
const cars = require('./cars.json')

app.use(express.json())

app.get("/api/cars", (req, res) => {
    res.status(200).json({
        data: cars,
    })
}); 

app.get("/api/cars/:id", (req, res) => {
    const carId = req.params.id;
    const car = cars.find((car) => car.id === parseInt(carId));

    if (!car) {
        return res.status(404).json({
            error: `Car with id ${carId} not found`,
        });
    }

    res.json({ data: car });
});

app.post("/api/cars/", (req, res) => {
    const newCar = {
        id: Date.now(),
        ...req.body,
    }
    console.log(newCar);
    
    cars.push(newCar);

    res.status(201).json({
        data:newCar,
    })

}); 

app.patch("/api/cars/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = cars.findIndex((car)=> car.id === id)
    if (index< 0){
        res.status(404).send({
            error: `Car with id ${id} not found`
        })
        return;
    }
    const {id:_id, ...theRest} = req.body;
    const updatedCar ={
        ...cars[index],
        ...theRest
    }

    cars[index] = updatedCar;
    res.send({data:updatedCar})
});
app.put("/api/cars/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = cars.findIndex((car)=> car.id === id)
    if (index< 0){
        res.status(404).send({
            error: `Car with id ${id} not found`
        })
        return;
    }
    const updatedCar = {
        id: id,
        ...req.body
    }

    cars[index] = updatedCar;
    res.send({data:updatedCar})
});
app.delete("/api/cars/:id", (req, res) => {
    const carId = req.params.id;
    const car = cars.find((car) => car.id === parseInt(carId));

    if (!car) {
        return res.status(404).json({
            error: `Car with id ${carId} not found`,
        });
    }
    cars.splice(carId-1, 1);
    res.send({ success: `Car with id ${carId} removed successfully`,
    data:car });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, err=>{
    if(err){
        console.error('something went wront', err);
        
    }
    console.log("server running at port " + PORT);
    
})