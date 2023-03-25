const express = require('express')
const tasks = require('./route/tasks')
const connectDB = require('./db/connect')
const notFound =require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')
require('dotenv').config()
const app = express()

app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandler)
const port = 3000


const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port)      
    }
    catch (error){
        console.log(error)
    }
}

start()