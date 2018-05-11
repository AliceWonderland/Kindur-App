const args = process.argv;
let input = args[2] || '10X10X011X';

// find all variations of '10X10X0' where:

// $ myprogram X0
// 00
// 1

// $ myprogram 10X10X0
// 1001000
// 1001010
// 1011000
// 1011010

// $ myprogram 10X10X011X
// 100100110
// 100100111
// 100101110
// 100101111
// 101100100
// 101100101
// 101101100
// 101101101

// assumes any combination of 10X is valid input
// 1X, XX, 00, X, XX1, 0X0, 111X, 0
// min str len 1

function findVariations(input){ //Time: O(n^m) Space: O(1)
    // accepts string, returns str variations

    if(!checkInput) return 'Check input, please!';

    let index = input.indexOf('X'); //Time: O(n)
    if(index<0){
        console.log(input);
        return input;
    }
    findVariations(input.slice(0,index) + '0' + input.slice(index+1));
    findVariations(input.slice(0,index) + '1' + input.slice(index+1));
    
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

// console.log(checkInput(input));
console.log(findVariations(input));
// console.log(test(input));



module.exports = { findVariations, checkInput };