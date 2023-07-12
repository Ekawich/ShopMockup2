const db = require('../db')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "testNode"

const User = {
    getUserByUsernameOrEmail: (identifier, callback) => {
        const query = "SELECT * FROM users WHERE username = ? OR email = ?"

        db.query(query, [identifier, identifier], (err, results) => {
            if (err) {
                console.error("Error retrieving user", err)
                callback(err, null)
                return
            } else {
                if (results.results === 0) {
                    callback(null, null)
                    return
                } else {
                    callback(null, results[0])
                }
            }
        })
    },

    createUser: (user, callback) => {
        const { username, email, password } = user
        const hashedPassword = bcrypt.hashSync(password, 10)

        const query = "INSERT INTO users (username , email , password) VALUES (? ,? ,?)"
        db.query(query, [username, email, hashedPassword], (err, results) => {
            if (err) {
                console.error("Error Creting user", err)
                callback(err, null)
            } else {
                console.log('User created successfully')
                callback(null, results)
            }
        })
    },

    generateToken: (user) => {
        const { id, username, email } = user
        const token = jwt.sign({ id, username, email }, secret, { expiresIn: '10m' })
        return token
    },

    getUserByUsername: (user, callback) => {
        const query = "SELECT * FROM users WHERE username = ?"

        db.query(query, [username], (err, results) => {
            if (err) {
                console.error('Error retrieving user', err)
                callback(err, null)
            } else {
                if (results.length === 0) {
                    callback(null, null)
                } else {
                    callback(null, results[0])
                }
            }
        })
    }
}

module.exports = User