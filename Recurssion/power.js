// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    if (n % 2 === 0) {
        let power = myPow(x, n / 2);
        return power * power;
    } else {
        return x * myPow(x, n - 1);
    } 
};