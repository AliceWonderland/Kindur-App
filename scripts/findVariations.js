const args = process.argv;
let input = args[2] || '10X10X0';

// $ myprogram X0
// 00
// 1
// $ myprogram 10X10X0
// 1001000
// 1001010
// 1011000
// 1011010
// $ myprogram
// 10X10X0X
// 10010000
// 10010100
// 10010101
// 10110000
// 10110100
// 10110101

// assumes any combination of 10X is valid input
// 1X, XX, 00, X, XX1, 0X0, 111X, 0
// min str len 1

function variations(input){
    // accepts string, returns str variations

    if(!checkInput) return 'Check input, please!';

    if(input.length === 1 && input !== 'X') return input;

    let map = new Map();

    // save previously added combinations to map
    for(let i=0; i<input.length; i++){
        let ele = input[i];
        if(ele === 'X'){
            let key = input.slice(0,i+1);
            let val = input.slice(0,i);

            if(map.has(key)){
                console.log(map.get(key));
            }else{
                map.set(key,[val+'0',val+'1']);
            }
        }
    }

    function logMapElements(value, key, map) {
        console.log(`[${key}] = ${value}`);
    }

    map.forEach(logMapElements);

    console.log(map);
}

function checkInput(input){
    // accepts str, return bool
    // check for null, empty str, and 10X
    // X must be uppercase

    if(!input || !input.length) return false;

    let set = new Set(['1','0','X']);

    for(let i=0; i<input.length; i++){
        if(!set.has(input[i])) return false;
    }

    return true;
}

console.log(checkInput(input));
console.log(variations(input));

module.exports = { checkInput };