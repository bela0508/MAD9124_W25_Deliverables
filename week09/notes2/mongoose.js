const mongoose = require("mongoose");


const main = async ()=>{
    try {
        await mongoose
        .connect("mongodb://localhost:27017/mad9124")
        .then(() => console.log("Connected to mongodb"))
        .catch((e) => console.error(`Error connecting to mongodb: ${e.message}`));
      
        const catSchema = mongoose.Schema(
            {name:String}
        )
        const Cat = mongoose.model("Cat", catSchema);
        const newCat = new Cat({name:'JOSH'})
        await newCat.save();

    } catch (error) {
        console.error(error)
    } finally{
        mongoose.disconnect()
    }

}
main()
