const { findPair, checkInput } = require('./findPair');

describe('Exercise #2 - findPair Tests', () => {
    describe('Example Balances', () => {
        test('tests 2500', () => {
            expect(findPair('assets/prices.txt', 2500)).toBe('Candy Bar 500, Earmuffs 2000');
        });
        test('tests 2300', () => {
            expect(findPair('assets/prices.txt', 2300)).toBe('Paperback Book 700, Headphones 1400');
        });
        test('tests 10000', () => {
            expect(findPair('assets/prices.txt', 10000)).toBe('Earmuffs 2000, Bluetooth Stereo 6000');
        });
        test('tests 1100', () => {
            expect(findPair('assets/prices.txt', 1100)).toBe('Not possible');
        });
        test('tests 2400', () => {
            expect(findPair('assets/prices.txt', 2400)).toBe('Detergent 1000, Headphones 1400');
        });
        test('tests 0', () => {
            expect(findPair('assets/prices.txt', 0)).toBe('Not possible');
        });
        test('doesn\'t accept invalid file path', () => {
            expect(findPair('blob', 0)).toBe('Please check your input file path.');
        });
    });
    describe('Check Inputs', () => {
        test('accepts a Single Line Input', () => {
            expect(checkInput('Candy Bar, 500', 2500)).toBeTruthy();
        });
        test('doesn\'t accept blank title', () => {
            expect(checkInput(', 500\nHeadphones, 800', 10000)).toBeFalsy();
        });
        test('doesn\'t accept non-integer for cost', () => {
            expect(checkInput('Candy Bar, 500\nHeadphones, www', 2300)).toBeFalsy();
        });
        test('doesn\'t accept blank for cost', () => {
            expect(checkInput('Candy Bar, \nHeadphones, 800', 2300)).toBeFalsy();
        });
        test('accepts 0 for balance', () => {
            expect(checkInput('Candy Bar, 500\nHeadphones, 800', 0)).toBeTruthy();
        });
        test('doesn\'t accept invalid str for prices', () => {
            expect(checkInput(2500,2500)).toBeFalsy();
        });
        test('doesn\'t accept empty str for prices', () => {
            expect(checkInput('',2500)).toBeFalsy();
        });
        test('doesn\'t accept blank for balance', () => {
            expect(checkInput('Candy Bar, 500\nHeadphones, 800')).toBeFalsy();
        });
    });
});







