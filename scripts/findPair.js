const args = process.argv;
let fs = require('fs');
let inputFile = args[2] || '../assets/prices.txt';
let inputBalance = args[3] || 2500;

// find closest pair sum to target value
// assumes correct format is 'item name, price\n'...
// assumes file is always correct format
// checks pairs 2 items at a time, saves minDiff pairs, returns minDiff or exact pair

function findPair(file, balance){ //Time: O(n + n/2 + m) => O(n) Space: O(n)
    // accepts txt file, int, returns str
    let prices;

    try{
        prices = fs.readFileSync(file, 'utf8').trim();
    }catch(err){
        return 'Please check your input file path.'
    }

    if(!checkInput(prices, balance)) return 'Please check your inputs.';

    prices = prices.split('\n').map(ele => ele.split(', ')); //Time: O(n) Space: O(n)
    balance = Number(balance);

    let minDiff = Infinity;
    let result = null;
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

function checkInput(file,balance){ //Time: O(n) Space: O(1)
    // accepts str, int, returns bool
    if(!file || !file.length || (!balance && balance !== 0) || (!Number(balance) && balance !== 0) || file[0] === ',') return false;

    let start = 0,
        end = file.length-1;

    for(let i=0; i<file.length; i++){
        start = i;
        let item = file.slice(start, end);
        let newline = item.indexOf('\n');
        let comma = item.indexOf(', ');
        let name, cost;

        if(newline > 0) end = newline;
        if(comma < 0) return false;

        name = item.slice(0, comma);
        cost = Number(item.slice(comma+2, end));
        if(!name.length || !cost) return false;
        
        i += end+1;
        end = file.length-1;
    }

    return true;
}

console.log(findPair(inputFile,inputBalance));

module.exports = { findPair, checkInput };

