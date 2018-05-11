# Kindur App
3 Exercises in Javascript
* [Simple API Service](https://github.com/AliceWonderland/Kindur-App/tree/master/server)
* Find Pairs Algorithm
* Find Permutations Algorithm

## Installation
Make sure Node.js is installed `node -v`. If not, install below.

From CLI:
* `git clone https://github.com/AliceWonderland/Kindur-App.git`
* `cd Kindur-App`
* `npm install`

## To Run + Test
#### #1 API
##### Locally
* `cd server`
* `npm install`
* `npm run start`
* `curl -X POST -H "Content-Type: application/json" -d '{"message": "foo"}' http://localhost:4200/api/messages`
* `curl http://localhost:4200/api/messages/2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae`
* `curl -i http://localhost:4200/api/messages/oop`
* http://localhost:4200/api/messages

##### Live
* `curl -X POST -H "Content-Type: application/json" -d '{"message": "foo"}' http://json.alicechuang.com/api/messages`
* `curl http://json.alicechuang.com/api/messages/2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae`
* `curl -i http://json.alicechuang.com/api/messages/oop`
* http://json.alicechuang.com/api/messages

#### #2 Pairs
* `npm run pairs`
* `node scripts/findPair.js assets/prices.txt 2500`
* `npm run test-pairs`

#### #3 Permutations
* `npm run variations`
* `node scripts/findVariations.js '10X10X0'`
* `npm run test-variations`

#### Tests
* Run all tests `npm run tests` 

## Packages, Tools, & Technologies
* Node (NPM v5.6.0+ and Node v8.9.4+) https://nodejs.org/en/download/
* Javascript ES6 (Language)
* Jest (Test Suite) https://facebook.github.io/jest/
* See [`server/README.md`](https://github.com/AliceWonderland/Kindur-App/blob/master/server/README.md) for API details.