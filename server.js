const express = require ('express')
const connectDb = require('./Config/connectDb')
const UserRoute = require('./Routes/User.js')
    require('dotenv').config()

const app = express()


connectDb()

app.use(express.json())
app.use('/api/users', UserRoute)



app.listen(process.env.port, ()=> 
console.log (`server is running on port ${process.env.port}`))