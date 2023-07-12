const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('../utils/jwt')

// Sign-up
const signup = async (req, res) => {
    const { username, email, password } = req.body

    try {
        // Check if the username is exists
        const existingUser = await User.findByUsername(username)
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' })
        }

        // Hash the password
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        // Create the new user
        const user = {
            username,
            email,
            password: hashedPassword
        }

        const userId = await User.create(user)
        res.status(200).json({ message: 'User created' })
    } catch (err) {
        console.error('Error signing up', err)
        res.status(500).json({ message: 'Internal server error' })
    }
}

const signin = async (req, res) => {
    const { usernameOrEmail, password } = req.body
    console.log(usernameOrEmail, password)

    try {
        // Find the user by username or email
        const user = await User.findByUsername(usernameOrEmail)
        if (!user) {
            return res.status(404).json({ status: 404, message: 'User not found' })
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.status(401).json({ status: 401, message: 'Invalid username or password' })
        }

        const token = jwt.generateToken({ userId: user.id })
        res.status(200).json({ status: 200, message: 'Authentication successful', token: token })
    } catch (err) {
        console.error('Error signing in')
        res.status(500).json({ status: 500, message: 'Internal server error' })
    }
}

const getUser = (req, res) => {
    User.getUser((err, users) => {
        res.json(users)
    })
}

module.exports = {
    signin,
    signup,
    getUser
}