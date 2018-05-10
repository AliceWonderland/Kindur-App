# Kindur App
3 Exercises in Javascript
* Simple API Service
* Find Pairs Algorithm
* Find Permutations Algorithm

## Installation
Make sure Node.js is installed `node -v`. If not, install below.

From CLI:
* `git clone https://github.com/AliceWonderland/Kindur-App.git`
* `npm install`

## To Run + Test
#### #1 API
* Browse to `server` folder
* `npm install`
* `npm run start`
* `curl -X POST -H "Content-Type: application/json" -d '{"message": "foo"}' http://localhost:4200/api/messages`
* `curl http://localhost:4200/api/messages/2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae`

#### #2 Pairs
* `npm run pairs`
* `node scripts/findPair.js prices.txt 2500`
* `npm run test-pairs`

#### #3 Permutations
* `npm run variations`
* `node scripts/findVariations.js '10X10X0'`
* `npm run tests-variations`

#### Tests
* `npm run test`

## Packages, Tools, & Technologies
* Node (NPM v5.6.0+ and Node v8.9.4+) https://nodejs.org/en/download/
* Javascript ES6 (Language)
* Jest (Test Suite) https://facebook.github.io/jest/
* See [`server/README.md`](https://github.com/AliceWonderland/Kindur-App/blob/master/server/README.md) for API Tools.