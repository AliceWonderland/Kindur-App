const args = process.argv;
let fs = require('fs');
let inputFile = args[2] || 'something';
let inputBalance = args[3] || 'something';

// assumes csv format is always item name, price\n
// assumes file is always correct format
// result must be a pair of items, a single item equal to the balance is not valid
// finds only equal pairs right now. Not less than. Many pairs can satisfy less than. Example returns pair closest to balance.


function findPairExact(file, balance){
    // accepts txt file, number, returns txt pair

    if(!file || !balance) return 'Please check your inputs.';

    let prices = fs.readFileSync(file, 'utf8').trim().split('\n').map(ele => ele.split(', ')); //Time: O(n) Space: O(n)
    let pricesMap = new Map();
    let result = null;
    balance = Number(balance);

    // checks for equal pairs
    for(let item of prices){ //Time: O(n^2) Space: O(1)
        let [name, cost] = item,
            diff = balance - cost;

        if(cost > balance) break;

        if(!pricesMap.has(cost)){ //Time: O(1)
            pricesMap.set(cost, name); // cost is the key, name is the val
        }

        if(pricesMap.has(diff)){
            return `${pricesMap.get(diff)} ${diff}, ${pricesMap.get(cost)} ${cost}`;
        }
    }

    return result || 'Not possible'
}

// find closest pair
function findPair(file, balance){
    if(!file || !balance) return 'Please check your inputs.';

    let prices = fs.readFileSync(file, 'utf8').trim().split('\n').map(ele => ele.split(', ')); //Time: O(n^2) Space: O(n)
    let result = null;
    balance = Number(balance);
    let minDiff = Infinity;

    // [500, 700, 1000, 1400, 2000, 6000]
    // [9500, 9300, 9000, 8600, 8000, 4000]

    let pointerLeft = 0,
        pointerRight = prices.length-1;

    while(pointerLeft < pointerRight){
        let sum = Number(prices[pointerLeft][1]) + Number(prices[pointerRight][1]);
        if(sum === balance){
            result = [pointerLeft, pointerRight];
            break;
        }
        if(sum < balance){
            let diff = balance - sum;
            if(diff < minDiff){
                minDiff = diff;
                result = [pointerLeft, pointerRight];
            }
            pointerLeft++;
        }else{
            pointerRight--;
        }
    }

    if(result) return result.map(ele => prices[ele].join(' ')).join(', ');
    return 'Not possible'
}

console.log(findPair(inputFile,inputBalance));

module.exports = { findPair };

