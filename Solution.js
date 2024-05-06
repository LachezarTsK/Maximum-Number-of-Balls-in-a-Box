
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
    const RANGE_OF_LIMITS = [1, Math.pow(10, 5)];
    const frequency = new Array(calculateSumOfDigits(RANGE_OF_LIMITS[1] - 1) + 1).fill(0);
    let maxFrequency = 0;

    for (let value = lowLimit; value <= highLimit; ++value) {
        let sumOfDigits = calculateSumOfDigits(value);
        maxFrequency = Math.max(maxFrequency, ++frequency[sumOfDigits]);
    }

    return maxFrequency;
};

/**
 * @param {number} value
 * @return {number}
 */
function calculateSumOfDigits(value) {
    let sumOfDigits = 0;
    while (value > 0) {
        sumOfDigits += value % 10;
        value = Math.floor(value / 10);
    }
    return sumOfDigits;
}
