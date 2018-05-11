# Simple Api
This api writes hashed messages to a txt file using Node FS, Node Crypto, Express, JSON.

http://json.alicechuang.com/api/messages

## To Install, Run, Test
* Browse to `server` folder
* `npm install`
* `npm run start`
* `curl -X POST -H "Content-Type: application/json" -d '{"message": "foo"}' http://localhost:4200/api/messages`
* `curl http://localhost:4200/api/messages/2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae`
* `curl -i http://localhost:4200/api/messages/oop`

## To Test on Live
* http://json.alicechuang.com/api/messages
* `curl -X POST -H "Content-Type: application/json" -d '{"message": "foo"}' http://json.alicechuang.com/api/messages`
* `curl http://json.alicechuang.com/api/messages/2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae`
* `curl -i http://json.alicechuang.com/api/messages/oop`

### Packages, Technologies, & Tools
* Node https://nodejs.org/docs/latest/api/fs.html
* Express.js (Server) https://expressjs.com/en/starter/hello-world.html
* BodyParser (Request Body Parser)
* Nodemon (Build Watcher)
* cURL (CLI Url Test Tool) https://curl.haxx.se/

### Resources
* Node Crypto https://nodejs.org/docs/latest/api/crypto.html#crypto_crypto_createhash_algorithm_options, https://medium.com/@chris_72272/what-is-the-fastest-node-js-hashing-algorithm-c15c1a0e164e
* Promises https://www.frankmitchell.org/2017/06/promise-objects/
* NGINX Reverse Proxy and Post https://serverfault.com/questions/763499/get-to-nginx-reverse-proxy-works-but-post-gives-me-a-502-bad-gateway-response?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
