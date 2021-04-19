const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const figurineRouter = express.Router();

figurineRouter.route('/figurine')
    .get((req, res) => {
        const response = {hello: 'This is the GET endpoint'};

    res.json(response);
});

app.use('/api', figurineRouter);

app.get('/', (req, res) => {
    res.send('Welcome to our Node Mon API');
});

app.listen(port, () => {
    console.log('Running on port ' + port);
});
