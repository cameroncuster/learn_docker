const express = require('express')
const figurines = require('./data/figurines')

const app = express()
const port = process.env.PORT || 3000
const figurineRouter = express.Router()

figurineRouter.route('/figurines')
    .get((req, res) => {

    res.json(figurines)
});

app.use('/api', figurineRouter)

app.get('/', (req, res) => {
    res.send('Welcome to our Node Mon API')
});

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});
