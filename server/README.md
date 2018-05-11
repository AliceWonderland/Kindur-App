# Simple Api
This api writes hashed messages to a txt file using Node FS, Node Crypto, Express, JSON.

http://json.alicechuang.com/api/messages

## To Install, Run, Test
* `cd server`
* `npm install`
* `npm run start`
* `curl -X POST -H "Content-Type: application/json" -d '{"message": "foo"}' http://localhost:4200/api/messages`
* `curl http://localhost:4200/api/messages/2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae`
* `curl -i http://localhost:4200/api/messages/oop`
* http://localhost:4200/api/messages

## To Test on Live
* `curl -X POST -H "Content-Type: application/json" -d '{"message": "foo"}' http://json.alicechuang.com/api/messages`
* `curl http://json.alicechuang.com/api/messages/2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae`
* `curl -i http://json.alicechuang.com/api/messages/oop`
* http://json.alicechuang.com/api/messages

### Packages, Technologies, & Tools
* Node https://nodejs.org/docs/latest/api/fs.html
* Express.js (Server) https://expressjs.com/en/starter/hello-world.html
* BodyParser (Request Body Parser) https://github.com/expressjs/body-parser
* Nodemon (Build Watcher) https://nodemon.io/
* cURL (CLI Url Test Tool) https://curl.haxx.se/

### Resources
* Node Crypto https://nodejs.org/docs/latest/api/crypto.html#crypto_crypto_createhash_algorithm_options, https://medium.com/@chris_72272/what-is-the-fastest-node-js-hashing-algorithm-c15c1a0e164e
* Promises https://www.frankmitchell.org/2017/06/promise-objects/, https://stackoverflow.com/questions/34628305/using-promises-with-fs-readfile-in-a-loop?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
* NGINX Reverse Proxy and Post https://serverfault.com/questions/763499/get-to-nginx-reverse-proxy-works-but-post-gives-me-a-502-bad-gateway-response?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa, https://www.digitalocean.com/community/tutorials/how-to-troubleshoot-common-http-error-codes
* Express Response Headers https://stackoverflow.com/questions/19696240/proper-way-to-return-json-using-node-or-express?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
* Content Types https://en.wikipedia.org/wiki/Media_type
* Simple REST Api https://www.codementor.io/wapjude/creating-a-simple-rest-api-with-expressjs-in-5min-bbtmk51mq