require("dotenv").config();

// const mongoose = require('mongoose')
const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('./models/User')

const app = express()
const port = process.env.PORT || 3001

const secret = process.env.JWT_SECRET
const expiration = '1h'

//Mongoose / MongoDB
const connectToMongoDB = require("./config/connection");
connectToMongoDB(); //execute connection

//Middleware
app.use(express.json());
app.use(express.urlencoded());


//Routes
app.get('/',  (req, res) => {
    res.send('<h1>Landing</h1>')
})


