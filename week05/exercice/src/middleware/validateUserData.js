const users = require("../models/users.json")
const validateUserData = (req, res, next) => {
  const {name, email} = req.body;

  const error = [];
  if(!name || !email) error.push("Name and email are required")
  users.some(user => {if(name == user.name){error.push("Users already logged in")}})
  

  if (error.length) {
    res.status(400).json({
      error,
    });
    return;
  }
  next();
};
  
  module.exports = validateUserData;