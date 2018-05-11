const router = require('express').Router();
const crypto = require('crypto');
const fs = require('fs');

// reads/writes to a txt file, jsondb.txt
const jsondb = 'db/jsondb.txt';

//api root
router.get('/', function (req, res, next) {
    res.send('api root');
});

//GET /api/messages
router.get('/messages', function (req, res, next) {
    fs.readFile(jsondb, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        data = JSON.parse(data);
        res.send(data);
    });
});

// POST /api/messages
router.post('/messages', function (req, res, next) {
    let requestData = '', requestDataKey, requestDataValue;

    if(Object.keys(req.body).length) requestData = req.body;
    if(Object.keys(req.query).length) requestData = req.query;

    if(requestData){
        requestDataKey = requestData[Object.keys(requestData)[0]];
        requestDataValue = requestData[Object.keys(requestData)[0]];
        const hash = crypto.createHash('sha256');
        hash.update(requestDataValue);
        requestDataValue = hash.digest('hex');
    }

    fs.readFile(jsondb, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        data = JSON.parse(data);

        if(!requestData){
            res.send(data);
            return;
        }

        let messages = data.messages;
        let msg = requestDataKey;
        let hash = requestDataValue;

        if(!messages[hash]){
            messages[hash] = msg;
        }

        data['messages'] = messages;
        data = JSON.stringify(data);

        writeFile(jsondb, data)
        .then(data => {
            console.log(`sent ${data}, ${data.length} bytes`);
            let result = {"digest":hash};
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
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

//GET /api/messages/hash
router.get('/messages/:hash', function (req, res, next) {
    let id = req.params.hash;

    fs.readFile(jsondb, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        data = JSON.parse(data);

        let messages = data.messages;
        if(messages[id]){
            let result = {"message": messages[id]};
             res.json(result);
        }else{
            next(err);
        }
    });
});

//api/messages hash
router.delete('/messages/:hash', function (req, res, next) {
    let id = req.params.hash;

   //delete message

});

// handles 404s
router.use(function (req, res, next) {
    const msg = JSON.stringify({"err_msg": "Message not found"});
    const err = new Error(msg);
    err.status = 404;
    next(err);
});

module.exports = router;