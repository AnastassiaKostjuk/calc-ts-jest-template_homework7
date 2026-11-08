import {multiply} from "../../src/homework6/homework6";
import {calculatePercentage} from "../../src/homework6/homework6";
import {isEven} from "../../src/homework6/homework6";
import {compareStrings} from "../../src/homework6/homework6";
import {isPositive} from "../../src/homework6/homework6";

describe('homework6', () => {

    test('test function multiply', async () => {
        expect(multiply(5, 85)).toBe(425);
        expect(multiply(1549, 845)).toBe(1308905);
    })

    test('test function calculate percentage', async () => {
        expect(calculatePercentage(5, 100)).toBe(5);
        expect(calculatePercentage(50, 1000)).toBe(5);
    })

    test('test function isEven', async () => {
        expect(isEven(5)).toBeFalsy();
        expect(isEven(12)).toBeTruthy();
    })

    test('test function compareStrings', async () => {
        expect(compareStrings('Harry', 'Harry ')).toBeFalsy();
        expect(compareStrings('Harry', 'Harry')).toBeTruthy();
    })

    test('test function isPositive', async () => {
        expect(isPositive(5)).toBeTruthy();
        expect(isPositive(-1)).toBeFalsy();
    })
})