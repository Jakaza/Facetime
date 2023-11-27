const router = require('express').Router();
const User = require('../models/User');

// Get User
router.get('/user/:id', async (req, res)=>{
  try{
    const user = await User.findById(req.params.id)
    res.send(user)
  }catch(err){
    console.log(err)
  }
})

// Get all users
router.get('/users', async (req, res)=>{
  try{
    const user = await User.find()
    res.send(user)
  }catch(err){
    console.log(err)
  }
})
// Delete user
router.delete('/user/:id', async (req, res) =>{
  try{
    const user = await User.findByIdAndDelete(req.params.id)
    res.send(user)
  }catch(err){
    console.log(err)
  }
})
// Update user
router.put('/user/:id', async (req, res) =>{
  try{
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send(user)
  }catch(err){
    console.log(err)
  }

})

module.exports = router
