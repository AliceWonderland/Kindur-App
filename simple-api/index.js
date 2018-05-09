// router
const express = require('express');
const app = express();

// parsing middleware
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

// routes
app.use('/api', require('./api'));

// handle 404s
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// handle 500s
app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(4200, () => console.log('Example app listening on port 4200!'));