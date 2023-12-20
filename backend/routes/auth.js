const router = require('express').Router();
const User = require('../models/User');
const {hashPassword, matchPassword} = require('../utils/password')


// Regsiter
router.post('/register', async (req, res) => {

  const hashedPassword = hashPassword(req.body.password)

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword
  })
  
  try{
    await user.save()
    res.status(200).json('User Registered')
    
  }catch(error){
    res.status(500).json(error)
  }
})


// Login 
router.post('/login', async (req, res)=>{

  try{
    const user = await User.findOne({'username': req.body.username })

    if(!user){
      return res.status(404).json('User was not found')
    }

    if(!matchPassword(req.body.password, user.password)){
      return res.status(400).json('Username or password is not correct, try again')
    }

    res.status(200).json(user)

  }catch(error){
    res.status(500).json(error)
  }

})


module.exports = router
