const Product = require('../models/productModel')

// @desc        Gets All Figurines
// @route       GET /api/figurines
async function getProducts(req, res) {
    try {
        const figurines = await Product.findAll()
        res.json(figurines)
    }
    catch (error) {
        console.log(error)
    }
}

// @desc        Create a Figurine
// @route       POST /api/figurines
async function createProduct(req, res) {
    try {

        const { name, description, price } = req.body

        const figurine = {
            name,
            description,
            price
        }

        const newFigurine = await Product.create(figurine)

        res.json(newFigurine)
    }
    catch (error) {
        console.log(error)
    }
}

// @desc        Gets Single Figurines by ID
// @route       GET /api/figurines/:id
async function getProduct(req, res) {
    try {
        const figurines = await Product.findByID(req.params.id)

        if (!figurine) {
            res.sendStatus(404)
        } else {
            res.json(figurine)
        }
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct
}
