const mongoose = require('mongoose')

const taskshema = new mongoose.Schema ({
    name :{
        type:String,
        required:[1,'name is required'],
        trim:1,
        maxlength :[20,'max is 20 char'],
        minlenght :[3 ,'min is 20 char']
    },
    doing :{
        type:Boolean,
        default:0
    }
})

module.exports = mongoose.model('task',taskshema)