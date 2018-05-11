const { findVariations, checkInput } = require('./findVariations');

describe('Exerxise #3 - Find Variations Tests', () => {
    describe('Example Variations', () => {
        test("1", () => {
            expect(findVariations('1')).toBe("1");
        });
        test("0", () => {
            expect(findVariations('0')).toBe("0");
        });

        let outputData = "";
        let storeLog = inputs => (outputData += inputs);
        test("X", () => {
            console["log"] = jest.fn(storeLog);
            findVariations('X');
            expect(outputData).toBe("01");
        });

        let output1 = "";
        let storeLog1 = inputs => (output1 += inputs);
        test("X0", () => {
            console["log"] = jest.fn(storeLog1);
            findVariations('X0');
            expect(output1).toBe("0010");
        });

        let output5 = "";
        let storeLog5 = inputs => (output5 += inputs);
        test("X0X", () => {
            console["log"] = jest.fn(storeLog5);
            findVariations('X0X');
            expect(output5).toBe("000001100101");
        });

        let output3 = "";
        let storeLog3 = inputs => (output3 += inputs);
        test('10X', () => {
            console["log"] = jest.fn(storeLog3);
            findVariations('10X');
            expect(output3).toBe("100101");
        });

        let output2 = "";
        let storeLog2 = inputs => (output2 += inputs);
        test('10X10X0', () => {
            console["log"] = jest.fn(storeLog2);
            findVariations('10X10X0');
            expect(output2).toBe("1001000100101010110001011010");
        });

        let output4 = "";
        let storeLog4 = inputs => (output4 += inputs);
        test('10X10X011X', () => {
            console["log"] = jest.fn(storeLog4);
            findVariations('10X10X011X');
            expect(output4).toBe("10010001101001000111100101011010010101111011000110101100011110110101101011010111");
        });

        let output6 = "";
        let storeLog6 = inputs => (output6 += inputs);
        test('100', () => {
            console["log"] = jest.fn(storeLog6);
            findVariations('100');
            expect(output6).toBe("100");
        });
    });
    describe('Check Inputs', () => {
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