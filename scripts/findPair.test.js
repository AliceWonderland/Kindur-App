const { findPair } = require('./findPair');

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
    });
});







