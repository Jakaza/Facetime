const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')
const helmet = require('helmet')
require('dotenv').config()
const app = express()
const port = 3000

async function connectDB(){
  try{
    await mongoose.connect(`mongodb+srv://themba:jakaza@cluster0.wlwdlgb.mongodb.net/facetimedb?retryWrites=true&w=majority`)
    console.log('DB Connected')
  }catch(err){
    console.log(err)
  }
}
connectDB()

//Middleware

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))


app.use(userRouter)
app.use(authRouter)
app.use(postRouter)


app.listen(port, ()=>{
console.log('Server runnign at ', port)
})


