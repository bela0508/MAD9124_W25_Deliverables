"use strict";

const mongoose = require("mongoose");

const catSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    lives: Number,
    favouriteFoods: [String],
  },
  {
    timestamps: true,
  }
);

const Cat = mongoose.model("Cat", catSchema);

const main = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/explore-mongo");

    // Get all cats
    const allCats = await Cat.find({});
    // console.log("all", allCats);

    // Get all cats with 9 lives
    const catsWith9Lives = await Cat.find({lives:9})
    // console.log(catsWith9Lives.length)

    // Get all cats older than 9 years old
    const catsOlderThan9Lives = await Cat.find({lives:{$gt:9}})
    // console.log(catsOlderThan9Lives.length)

    // Get all cats whose name starts with `G`
    const nameStartWithG = await Cat.find({name:/^G/i})
    // console.log(nameStartWithG.length)

    // Get all cats that like tuna
    const catLikeTuna = await Cat.find({favouriteFoods:'tuna'})
    // console.log(catLikeTuna.length)

    // Get all cats that don't like tuna
    const catDontLikeTuna = await Cat.find({favouriteFoods:{$ne:['tuna']}})
    // console.log(catDontLikeTuna.length)

    // Get all cats that like potatoes or strawberry
    const catLikePotatoOrStrawberry = await Cat.find({favouriteFoods:{$in:['potatoes', 'strawberry']}})
    // console.log(catLikePotatoOrStrawberry.length)

    // Get all cats that like mice and biscuits
    const catLikeMiceOrBiscuits = await Cat.find({favouriteFoods:{$all:['mice', 'biscuits']}})
    // console.log(catLikeMiceOrBiscuits.length)


    // Get the oldest cat
    const oldestCat = await Cat.aggregate([{$sort:{age:-1}},{$limit:1}])
    // console.log(oldestCat)

    // Get the oldest cat that likes fish
    const oldestCatLikeFish = await Cat.find({favouriteFoods:'fish'}).aggregate([{$sort:{age:-1}},{$limit:1}])
    console.log(oldestCatLikeFish)


    // Get the cat with the least lives that like milk and biscuits

  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();
  }
};

main();
