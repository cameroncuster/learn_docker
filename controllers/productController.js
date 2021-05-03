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

// @desc        Update a Figurine
// @route       PUT /api/figurines
async function updateProduct(req, res) {
    try {
        const figurine = await Product.findByID(req.params.id)

        if (!figurine) {
            res.sendStatus(404)
        } else {

            const { name, description, price } = req.body
            const modified = {
                name: name || figurine.name,
                description: description || figurine.description,
                price: price || figurine.price
            }

            const updatedFigurine = await Product.update(req.params.id, modified)

            res.json(updatedFigurine)
        }
    }
    catch (error) {
        console.log(error)
    }
}

// @desc        Gets Single Figurine by ID
// @route       GET /api/figurine/:id
async function getProduct(req, res) {
    try {
        const figurine = await Product.findByID(req.params.id)

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

// @desc        Removes a Single Figurine by ID
// @route       DELETE /api/figurine/:id
async function removeProduct(req, res) {
    try {
        const figurine = await Product.findByID(req.params.id)

        if (!figurine) {
            res.sendStatus(404)
        } else {
            await Product.remove(req.params.id)
            res.json({ message: `Product ${req.params.id} has been removed`})
        }
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    removeProduct
}
