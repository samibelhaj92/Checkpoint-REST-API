const UserSchema = require('../models/User')

// method POST :  ADD A NEW USER TO THE DATABASE 
// req.body
// path /addUser

exports.addUser= async (req,res)=> {
    const {email}=req.body
    const {userName}=req.body    
        try {
            const newUser = new UserSchema(req.body)
    
            const emailFound = await UserSchema.findOne({email})
            const userNameFound = await UserSchema.findOne({userName})

            if (emailFound) {return res.status(400).send(`${email} is already exists`)}
            else if (userNameFound) {return res.status(400).send(`${userName} is already exists`)}
            await newUser.save()
    
            res.status(200).send(`${userName} is added ${newUser}`)
    
        } catch (error) {
            res.status(500).send(`could not add ${newUser}`)
        }
    }

    // method GET :  RETURN ALL USERS 
    // path /

exports.getUsers= async (req, res)=> {
    
    try {
        const users= await UserSchema.find()
        res.status(200).send({msg:'list of users', users})

    } catch (error) {
        res.status(500).send('could not get users')
    }
}

// method GET :  RETURN ONE USER BY ID
// req.params
// path /:id

exports.getOneUser= async (req,res)=>{
    const {id}= req.params
    try {
        const foundUser = await UserSchema.findById(id)
        res.status(200).send(`${id} is found ${foundUser}`)
    } catch (error) {
        res.status(500).send(`could not get ${id}`)
    }
}

// method PUT : EDIT A USER BY ID
// req.params req.body
// path /updateUser/:id

exports.updateUser= async (req,res)=>{
    const {id}= req.params
    try {
        const updated= await UserSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).send(`${id} is updated ${updated}`)
    } catch (error) {
        res.status(500).send(`could not update ${id}`)
    }
}

// method DELETE : REMOVE A USER BY ID 
// req.params
// path /deleteUser/:id

exports.deleteUser= async (req,res)=>{
    const {id}=req.params
        try {
            const deleted= await UserSchema.findByIdAndDelete(id)
            res.status(200).send({msg:'user deleted', deleted})
        } catch (error) {
            res.status(500).send('could not delete user')
        }
    }