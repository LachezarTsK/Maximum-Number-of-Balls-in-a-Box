
package main

var RANGE_OF_LIMITS []int = []int{1, 100000}

func countBalls(lowLimit int, highLimit int) int {
	frequency := make([]int, calculateSumOfDigits(RANGE_OF_LIMITS[1]-1)+1)
	var maxFrequency = 0

	for value := lowLimit; value <= highLimit; value++ {
		sumOfDigits := calculateSumOfDigits(value)
		frequency[sumOfDigits]++
		maxFrequency = max(maxFrequency, frequency[sumOfDigits])
	}

	return maxFrequency
}

func calculateSumOfDigits(value int) int {
	var sumOfDigits = 0
	for v := value; v > 0; {
		sumOfDigits += v % 10
		v /= 10
	}
	return sumOfDigits
}
