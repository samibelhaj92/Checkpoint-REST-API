//Installing and setting up Mongoose


const mongoose = require ('mongoose')


const connectDb= async ()=> {
    console.log(process.env.MONGO_URI)
    try {
      await mongoose.connect(process.env.MONGO_URI)
        console.log('db is connected')
    } catch (error) {
        console.log({msg:'db is not connected', error})
    }
}
module.exports=connectDb