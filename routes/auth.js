const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt')
// const bcrypt = require('bcrypt');


// Regsiter
router.post('/register', async (req, res) => {

  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(req.body.password, salt)
  
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

module.exports = router
