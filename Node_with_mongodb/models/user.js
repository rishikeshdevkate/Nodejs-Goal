const mongoose=require('mongoose')

const nameSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    city:{
        type: String,
    }
    
})

module.exports = mongoose.model('user',nameSchema)