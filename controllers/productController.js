const Product = require('../models/productModel')

async function getProducts(req, res) {
    try {
        const figurines = await Product.findAll()
        res.json(figurines)
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProducts
}
