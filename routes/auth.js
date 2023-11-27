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
    res.send('User Registered')
    
  }catch(error){
    console.log(error)
  }
})


// Login 
router.post('/login', async (req, res)=>{

  try{
    const user = await User.findOne({'username': req.body.username })

    if(!user){
      return res.send('User was not found')
    }

    if(!matchPassword(req.body.password, user.password)){
      return res.send('Username or password is not correct, try again')
    }

    res.send(user)

  }catch(err){
    console.log(err)
  }

})


module.exports = router
