const mongoose = require('mongoose')

mongoose.set('strictQuery', true)
const conectDB = async (URI) => {
    mongoose
        .connect(URI)
}

module.exports = conectDB;