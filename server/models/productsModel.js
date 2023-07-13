const db = require('../utils/db')

const products = {
    addProduct: (product) => {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO products (album, band, type, list, price, discount, stock, createAt)"

            db.query(query, [product.album, product.band, product.type, product.list, product.price, product.discount, product.stock, createAt], (err, results) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(results)
            })
        })
    }
}

module.exports = products