
using System;

public class Solution
{
    private static readonly int[] RANGE_OF_LIMITS = { 1, (int)Math.Pow(10, 5) };

    public int CountBalls(int lowLimit, int highLimit)
    {
        int[] frequency = new int[CalculateSumOfDigits(RANGE_OF_LIMITS[1] - 1) + 1];
        int maxFrequency = 0;

        for (int value = lowLimit; value <= highLimit; ++value)
        {
            int sumOfDigits = CalculateSumOfDigits(value);
            maxFrequency = Math.Max(maxFrequency, ++frequency[sumOfDigits]);
        }

        return maxFrequency;
    }

    private int CalculateSumOfDigits(int value)
    {
        int sumOfDigits = 0;
        while (value > 0)
        {
            sumOfDigits += value % 10;
            value /= 10;
        }
        return sumOfDigits;
    }
}
