require("dotenv").config();
const express = require('express')

const userRoutes = require('./routes/userRoutes')

const app = express()
const port = process.env.PORT || 3001

//Mongoose / MongoDB
const connectToMongoDB = require("./config/connection");
connectToMongoDB(); //execute connection

//Middleware
app.use(express.json());
app.use(express.urlencoded());


//Routes
app.get('/', (req, res) => {
    res.send('<h1>Landing</h1>')
})

app.use('/api', userRoutes )

app.listen(port, () => {
    console.log(`'[ Server is Running ] http://localhost:${port}`)
})