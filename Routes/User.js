const express = require('express')
const { addUser, getUsers, getOneUser, updateUser, deleteUser } = require('../Controlers/User.js')
const UserSchema = require('../models/User.js')

const UserRoute = express.Router()

// method post
// req.body
// path /addUser

UserRoute.post('/addUser', addUser)

// method get 1/2 (get all)
// path /

UserRoute.get('/', getUsers)

// method get 2/2 (get one by id)
// req.params
// path /:id

UserRoute.get('/:id', getOneUser)

// method put
// req.params req.body
// path /updateUser/:id

UserRoute.put('/updateUser/:id', updateUser)

// method delete
// req.params
// path /deleteUser/:id

UserRoute.delete('/deleteUser/:id', deleteUser)

module.exports=UserRoute