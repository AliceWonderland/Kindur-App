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
* `curl http://localhost:4200/api/messages/b5bb9d8014a0f9b1d61e21e796d78dc cdf1352f23cd32812f4850b878ae4944c`

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