const args = process.argv;
let fs = require('fs');
let inputFile = args[2];
let inputBalance = args[3];

// find closest pair sum to target value
// assumes csv format is always 'item name, price\n'...
// assumes file is always correct format

// find closest pair or exact pair
function findPair(file, balance){ //Time: O(n + n/2 + m) => O(n) Space: O(n)
    if(!file || (!balance && balance !== 0)) return 'Please check your inputs.';

    let prices = fs.readFileSync(file, 'utf8').trim().split('\n').map(ele => ele.split(', ')); //Time: O(n) Space: O(n)
    let result = null;
    balance = Number(balance);
    let minDiff = Infinity;

    let pointerLeft = 0,
        pointerRight = prices.length-1;

    while(pointerLeft < pointerRight){ //Time: O(n/2) Space: O(1)
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

    if(result) return result.map(ele => prices[ele].join(' ')).join(', '); //O(m)
    return 'Not possible'
}

// finds exact pair only Time: O(n) Space: O(n)
function findPairExact(file, balance){
    if(!file || !balance) return 'Please check your inputs.';

    let prices = fs.readFileSync(file, 'utf8').trim().split('\n').map(ele => ele.split(', ')); //Time: O(n) Space: O(n)
    let pricesMap = new Map();
    balance = Number(balance);

    for(let item of prices){ //Time: O(n) Space: O(1)
        let [name, cost] = item,
          diff = balance - cost;

        if(cost > balance) break;

        if(!pricesMap.has(cost)){ //Time: O(1)
            pricesMap.set(cost, name);
        }

        if(pricesMap.has(diff)){ //Time: O(1)
            return `${pricesMap.get(diff)} ${diff}, ${pricesMap.get(cost)} ${cost}`;
        }
    }

    return 'Not possible'
}

console.log(findPair(inputFile,inputBalance));

module.exports = { findPair };

