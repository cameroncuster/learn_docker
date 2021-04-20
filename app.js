const express = require('express')

const { getProducts, getProduct, createProduct, updateProduct, removeProduct } = require('./controllers/productController')

const app = express()
const port = process.env.PORT || 3000
const figurineRouter = express.Router()

app.use(express.json())

figurineRouter.route('/figurines')
    .get((req, res) => {
        getProducts(req, res)
});

figurineRouter.route('/figurines/:id')
    .get((req, res) => {
        getProduct(req, res)
});

figurineRouter.route('/figurines')
    .post((req, res) => {
        createProduct(req, res)
});

figurineRouter.route('/figurines')
    .put((req, res) => {
        updateProduct(req, res)
});

figurineRouter.route('/figurines')
    .delete((req, res) => {
        removeProduct(req, res)
});

app.use('/api', figurineRouter)

app.get('/', (req, res) => {
    res.send('Welcome to our Node Mon API')
});

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});
