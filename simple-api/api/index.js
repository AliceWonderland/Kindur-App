const router = require('express').Router();
const crypto = require('crypto');
const fs = require('fs');

// reads/writes to a txt file, jsondb.txt
const jsondb = 'db/jsondb.txt';
const hash = crypto.createHash('sha256');

//api root
router.get('/', function (req, res, next) {
    res.send('api root');
});

//api/messages
router.get('/messages', function (req, res, next) {

    fs.readFile(jsondb, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        data = JSON.parse(data);

        if(!Object.keys(req.query).length){
            res.send(data);
            return;
        }

        let messages = data.messages;
        let key = Object.keys(req.query)[0];
        let val = Object.values(req.query)[0];

        if(!messages[key]){
            messages[key] = val;
        }

        data['messages'] = messages;
        data = JSON.stringify(data);

        writeFile(jsondb, data)
        .then(data => {
            console.log(`sent ${data}, ${data.length} bytes`);
            res.send(data);
        })
        .catch(err => {
            console.log(err);
            process.exit(1);
        });

    });

    function writeFile(path, data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, data, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve(data);
            });
        });
    }
});

router.post('/messages', function (req, res, next) {

    fs.readFile(jsondb, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        data = JSON.parse(data);
        let messages = data.messages;
        let key = Object.keys(req.query)[0];
        let val = Object.values(req.query)[0];

        if(!messages[key]){
            messages[key] = val;
        }

        data['messages'] = messages;
        data = JSON.stringify(data);

        writeFile(jsondb, data)
        .then(data => {
            console.log(`sent ${data} bytes`);
            res.send(data);
        })
        .catch(err => {
            console.log(err);
            process.exit(1);
        });

    });

    function writeFile(path, data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, data, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve(data);
            });
        });
    }
});

//api/messages hash
router.get('/messages/:id', function (req, res, next) {
    console.log(req.params.id);

    let id = req.params.id;

    fs.readFile(jsondb, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        data = JSON.parse(data);
        let messages = data.messages;

        if(messages[id]){
            res.send(messages[id]);
        }else{
            res.status('Error', 404);
        }

    });
    
});

//api/messages hash
router.delete('/messages/:id', function (req, res, next) {
    console.log(req.params.id);

    let id = req.params.id;

    fs.readFile(jsondb, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        data = JSON.parse(data);
        let messages = data.messages;

        if(messages[id]){
            res.send(messages[id]);
        }else{
            res.status('Error', 404);
        }

    });

});

// handles 404s
router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
});

module.exports = router;