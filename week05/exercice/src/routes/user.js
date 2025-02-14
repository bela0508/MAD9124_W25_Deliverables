const { Router } = require('express');
const userRouter = Router();
const users = require('../models/users.json')
const userValidation = require('../middleware/validateUserData')

const nextId = () => {
  if (users.length === 0) return 1;
  return Math.max(...users.map(user => user.id)) + 1;
};

userRouter.get('/', (_req, res)=>{
  res.status(200).json({
    data: users,
  });
})
userRouter.post('/',userValidation,(req, res)=>{
  const {name, email, phone} = req.body;
  const newUser ={
    id: nextId(),
    name,
    email,
    phone
  }

  users.push(newUser)

  return res.status(201).json({
    data: newUser
  })
})

module.exports = userRouter;