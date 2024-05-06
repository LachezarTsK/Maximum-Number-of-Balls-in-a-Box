
function countBalls(lowLimit: number, highLimit: number): number {
    const RANGE_OF_LIMITS = [1, Math.pow(10, 5)];
    const frequency: number[] = new Array(calculateSumOfDigits(RANGE_OF_LIMITS[1] - 1) + 1).fill(0);
    let maxFrequency = 0;

    for (let value = lowLimit; value <= highLimit; ++value) {
        let sumOfDigits = calculateSumOfDigits(value);
        maxFrequency = Math.max(maxFrequency, ++frequency[sumOfDigits]);
    }

    return maxFrequency;
};

function calculateSumOfDigits(value: number): number {
    let sumOfDigits = 0;
    while (value > 0) {
        sumOfDigits += value % 10;
        value = Math.floor(value / 10);
    }
    return sumOfDigits;
}
