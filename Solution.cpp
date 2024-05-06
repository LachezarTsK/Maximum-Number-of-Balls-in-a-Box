
#include <array>
#include <vector>
using namespace std;

class Solution {

    static constexpr array<int, 2>  RANGE_OF_LIMITS = { 1, 100000 };

public:
    int countBalls(int lowLimit, int highLimit) const {
        vector<int>frequency(calculateSumOfDigits(RANGE_OF_LIMITS[1] - 1) + 1);
        int maxFrequency = 0;

        for (int value = lowLimit; value <= highLimit; ++value) {
            int sumOfDigits = calculateSumOfDigits(value);
            maxFrequency = max(maxFrequency, ++frequency[sumOfDigits]);
        }

        return maxFrequency;
    }

private:
    int calculateSumOfDigits(int value) const {
        int sumOfDigits = 0;
        while (value > 0) {
            sumOfDigits += value % 10;
            value /= 10;
        }
        return sumOfDigits;
    }
};
