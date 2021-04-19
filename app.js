const express = require('express')

const { getProducts, getProduct, createProduct } = require('./controllers/productController')

const app = express()
const port = process.env.PORT || 3000
const figurineRouter = express.Router()

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

app.use('/api', figurineRouter)

app.get('/', (req, res) => {
    res.send('Welcome to our Node Mon API')
});

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});
