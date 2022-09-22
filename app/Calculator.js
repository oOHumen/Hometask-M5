/**
 *
 * a simple class contains the metods add and multiply
 * @class Calculator
 */
class Calculator {
    /**
     * Creates an instance of Calculator.
     * @memberof Calculator
     */
    constructor() {};

    /**
     *
     *
     * @param {Number} number pass the numbers to add
     * @return {Number} sum of numbers that passed
     * @memberof Calculator
     */
    getAdd(...numbers) {
        let sumOfNumbers = 0;
        for (const number of numbers) {
            if (!Number(number)) {
                throw Error('not a number');
            } else {
                sumOfNumbers += number;
            }
        }
        return sumOfNumbers;
    }

    /**
     *
     *
     * @param {Number} numbers pass the numbers to multiply
     * @return {Number} multiplyed numbers result
     * @memberof Calculator
     */
    getMultiply(...numbers) {
        let multiplyedNumbers = 1;
        for (const number of numbers) {
            if (!Number(number)) {
                throw Error('not a number');
            } else {
                multiplyedNumbers *= number;
            }
        }
        return multiplyedNumbers;
    }
}

module.exports = Calculator;