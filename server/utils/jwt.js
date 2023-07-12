const jwt = require('jsonwebtoken')

const secretKey = "testNode"

const generateToken = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: '5m' })
}

const veriftToken = (token) => {
    try {
        return jwt.verify(token, secretKey)
    } catch (err) {
        return null
    }
}

module.exports = {
    generateToken,
    veriftToken
}