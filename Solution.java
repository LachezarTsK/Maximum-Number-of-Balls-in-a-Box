
public class Solution {

    private static final int[] RANGE_OF_LIMITS = {1, (int) Math.pow(10, 5)};

    public int countBalls(int lowLimit, int highLimit) {
        int[] frequency = new int[calculateSumOfDigits(RANGE_OF_LIMITS[1] - 1) + 1];
        int maxFrequency = 0;

        for (int value = lowLimit; value <= highLimit; ++value) {
            int sumOfDigits = calculateSumOfDigits(value);
            maxFrequency = Math.max(maxFrequency, ++frequency[sumOfDigits]);
        }

        return maxFrequency;
    }

    private int calculateSumOfDigits(int value) {
        int sumOfDigits = 0;
        while (value > 0) {
            sumOfDigits += value % 10;
            value /= 10;
        }
        return sumOfDigits;
    }
}
