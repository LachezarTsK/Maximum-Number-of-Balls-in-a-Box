
import kotlin.math.pow
import kotlin.math.max

class Solution {

    private companion object {
        val RANGE_OF_LIMITS = intArrayOf(1, 10.0.pow(5.0).toInt())
    }

    fun countBalls(lowLimit: Int, highLimit: Int): Int {
        val frequency = IntArray(calculateSumOfDigits(RANGE_OF_LIMITS[1] - 1) + 1)
        var maxFrequency = 0

        for (value in lowLimit..highLimit) {
            val sumOfDigits = calculateSumOfDigits(value)
            maxFrequency = max(maxFrequency, ++frequency[sumOfDigits])
        }

        return maxFrequency
    }

    private fun calculateSumOfDigits(value: Int): Int {
        var sumOfDigits = 0
        var v = value

        while (v > 0) {
            sumOfDigits += v % 10
            v = (v / 10).toInt()
        }
        return sumOfDigits
    }
}
