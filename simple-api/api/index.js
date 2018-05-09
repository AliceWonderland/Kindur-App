const router = require('express').Router();
const fs = require('fs');
let jsondb;

// router.use('/puppies', require('./puppies')); // matches all requests to  /api/puppies/

//api root
router.get('/', function (req, res, next) {
    res.send('api root');
});

//api/messages
router.get('/messages', function (req, res, next) {
    
    fs.readFile(__dirname+'/jsondb.txt', 'utf-8', (err, data) => {
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

        writeFile(__dirname+'/jsondb.txt', JSON.stringify(data))
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

// handles 404s
router.use(function (req, res, next) {
    const err = new Error('Not found. Alice');
    err.status = 404;
    next(err);
});

module.exports = router;