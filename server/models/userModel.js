const db = require('../utils/db')

const User = {
    findByUsername: (username) => {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE username = ?"

            db.query(query, [username], (err, results) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(results[0])
            })
        })
    },

    create: (user) => {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users (username, email, password , createAt) VALUES (?, ?, ?, ?)"
            const newDate = new Date()

            db.query(query, [user.username, user.email, user.password, newDate], (err, results) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(results.insertId)
            })
        })
    },

    getUser: (callback) => {
        const query = "SELECT * FROM users"

        db.query(query, (err, results) => {
            callback(null, results)
        })
    },

    getUserById: (user, callback) => {
        return new Promise((resolve, reject) => {
            const query = "SELECT * from users WHERE id = ?"

            db.query(query, [user.id], (err, results) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(results)
            })
        })
    }
}

module.exports = User