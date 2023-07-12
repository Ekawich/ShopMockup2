const User = require('../models/userModel')
const bcrypt = require('bcrypt');

const UserController = {
    signup: (req, res) => {
        const { username, email, password } = req.body

        // Check if user with the same username or email already exists
        User.getUserByUsernameOrEmail(username, (err, user) => {
            if (err) {
                return res.status(500).json({ error: 'Internal server error' })
            }

            if (user) {
                return res.status(400).json({ error: 'Username or email already exists' })
            }

            // create new user
            User.createUser({ username, email, password }, (err, results) => {
                if (err) {
                    return res.status(500).json({ error: 'Internal server error' })
                }

                return res.status(201).json({ message: 'User created successfully' })
            })
        })
    },

    signin: (req, res) => {
        const { identifier, password } = req.body

        // Check if user with the provided username or email exists
        User.getUserByUsernameOrEmail(identifier, (err, user) => {
            if (err) {
                return res.status(500).json({ error: "Internal server error" })
            }

            if (!user) {
                return res.status(401).json({ error: "Invalid credentials" })
            }

            // Compare the provided password with the hashed password
            const passwordMatch = bcrypt.compareSync(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ error: 'Invalid credentials' })
            }

            // Generate a JWT token
            const token = User.generateToken(user)

            // Return the token
            return res.status(200).json({ message: 'Signin successful', token: token })
        })
    }
}

module.exports = UserController