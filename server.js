const express = require ("express")

const app = express()

require('dotenv').config()

app.use(express.json)

const connectDB = require('./config/connectDB');
connectDB()

app.use('/api/contcat' , require('./routes/contact'))


const Port = process.env.PORT

app.listen(Port,error => {
    error ? console.error (`Failed to connect to server !! ${error}`)
    :
    console.log(`Server is ranning on port ${Port}...`)
})