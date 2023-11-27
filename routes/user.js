const router = require('express').Router();
const User = require('../models/User');
const {hashPassword, matchPassword} = require('../utils/password')

// Get User
router.get('/user/:id', async (req, res)=>{
  try{
    const user = await User.findById(req.params.id)
    const {password, updatedAt, ...others} = user._doc
    res.send(others)
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

  if(req.params.id === req.body.userId){
    try{
      const user = await User.findByIdAndDelete(req.params.id)
      res.status(200).json('Account has been successfully deleted')
    }catch(err){
      console.log(err)
    }

  }else{
    res.status(401).json('You can only delete your account')
  }
})
// Update user
router.put('/user/:id', async (req, res) =>{

  if(req.params.id === req.body.userId){

    if(req.body.password){
      const hashedPassword = hashPassword(req.body.password)
      req.body.password = hashedPassword
    }
    try{
      const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body})
      res.status(200).json('Account has been successfully updated')
    }catch(err){
      console.log(err)
    }

  }else{
    res.status(401).json('You can only update your account')
  }

})

// Follow user
router.put('/user/:id/follow', async (req, res) =>{
  const currentUserId = req.body.userId
  const userId = req.params.id

  if(userId !== currentUserId){
    try{
      const user = await User.findById(userId)
      const currentUser = await User.findById(currentUserId)

      if(!user.followers.includes(currentUserId)){
        await user.updateOne({$push: {followers: currentUserId}})
        await currentUser.updateOne({$push: {followins: userId}})
        res.status(403).json('User has been succefully followed ')
      }else{
        res.status(403).json('User has been already followed ')
      }
    }catch(err){
      res.status(500).json(err)
    }
  }else{
    res.status(403).json('You cannot follow yourself.')
  }
})

// Unfollow user
router.put('/user/:id/unfollow', async (req, res) =>{
  const currentUserId = req.body.userId
  const userId = req.params.id

  if(userId !== currentUserId){
    try{
      const user = await User.findById(userId)
      const currentUser = await User.findById(currentUserId)

      if(!user.followins.includes(currentUserId)){

        await user.updateOne({$pull: {followers: currentUserId}})
        await currentUser.updateOne({$pull: {followins: userId}})

        res.status(403).json('User has been succefully unfollowed ')

      }else{
        res.status(403).json('You donnot follow the User')
      }
    }catch(err){
      res.status(500).json(err)
    }
  }else{
    res.status(403).json('You cannot unfollow yourself.')
  }
})
module.exports = router
