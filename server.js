require("dotenv").config();
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
app.get('/', (req, res) => {
    res.send('<h1>Landing</h1>')
})

app.post('/api/users/register', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        console.log("Created new User.");

        const transformedUser = { username: newUser.username, email: newUser.email }
        res.status(201).json(transformedUser);
    } catch (error) {
        //Base Console Error for all errors when making new user
        console.error("[ Error creating new User ] Email is already Registered. ", error.message);
        //Error for making new user when email is already exisiting
        if (User.findOne({ email: req.body.email })) {
            return res.status(400).json({ message: 'This email is already registered.' })
        }
        //Error when user does not exist
        res.json({
                error:
                    "Encountered an error when creating new user. Check URI or formating of request.",
            });
    }
})

app.post('/api/users/login', async (req, res) => {
    try {
        //check user's email
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(400).json({ message: 'Incorrect email or password.' })
        }
        //check password
        const correctPw = await user.isCorrectPassword(req.body.password)
        if (!correctPw) {
            return res.status(400).json({ message: 'Incorrect email or password.' })
        }
        //Create Token
        const payload = {
            _id: user._id,
            username: user.username
        }
        const token = jwt.sign({ data: payload }, secret, { expiresIn: expiration })

        res.json({ token, user })

    } catch (error) {
        console.error('[ Authentication Error ] ', error.message)
    }
})


app.listen(port, () => {
    console.log(`'[ Server is Running ] http://localhost:${port}`)
})