const express = require('express')
const routes = require('./routes/allroutes')
const app = express()
const conectDB = require('./db/connect')
require('dotenv').config()

app.use(express.json())

app.get('/',(req,res)=>{res.send('route is working')});

app.use('/api/v1/tasks',routes)
const conect = async (port) =>{
    try {
        await conectDB(process.env.URI)
        app.listen(port,console.log(`app is working on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

conect(3000)