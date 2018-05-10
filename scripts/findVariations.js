const args = process.argv;
let input = args[2] || '10X10X0';

// find all variations of '10X10X0' where:

// $ myprogram X0
// 00
// 1

// $ myprogram 10X10X0
// 1001000
// 1001010
// 1011000
// 1011010

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
    console.log(map);
}

function checkInput(input){ //Time: O(n) Space: O(1)
    // accepts str, return bool
    // check for null, empty str, and 10X

    if(!input || !input.length) return false;
    input = input.toUpperCase();

    let set = new Set(['1','0','X']);

    for(let i=0; i<input.length; i++){
        if(!set.has(input[i])) return false;
    }

    return true;
}

console.log(checkInput(input));
console.log(variations(input));

module.exports = { checkInput, variations };