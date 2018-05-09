const { checkInput } = require('./xo');

describe('X0 Tests', () => {
    // describe('getDeliveries', () => {
    //     test('parses input string to array', () => {
    //         expect(getDeliveries("5x5 (1, 3) (4, 4)")).toEqual([ [ 1, 3 ], [ 4, 4 ] ]);
    //     });
    // });
    //
    // describe('getDirection', () => {
    //     test('gets Direction for Up', () => {
    //         expect(getDirection('y',0,1)).toBe('N');
    //     });
    //     test('gets Direction for Down', () => {
    //         expect(getDirection('y',1,0)).toBe('S');
    //     });
    //     test('gets Direction for Left', () => {
    //         expect(getDirection('x',1,0)).toBe('W');
    //     });
    //     test('gets Direction    for Right', () => {
    //         expect(getDirection('x',0,1)).toBe('E');
    //     });
    // });


    describe('basic checks', () => {
        test('is not empty string', () => {
            expect(checkInput("")).toBeFalsy();
        });
        test('is not undefined', () => {
            expect(checkInput()).toBeFalsy();
        });
        test('only contains 10X', () => {
            expect(checkInput("10Xt)")).toBeFalsy();
        });
    });
});