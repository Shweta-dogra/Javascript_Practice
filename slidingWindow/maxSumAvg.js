// Maximum average of all subArray

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

var findMaxAverage = function(nums, k) {
    let maxSum =0;
    let avg =0;
    for(let i =0; i<k; i++){
        maxSum+=nums[i];
    }
    let curSum = maxSum;
    for(let i =k; i<nums.length; i++){
        curSum = curSum-nums[i-k]+nums[i];
        maxSum = Math.max(curSum, maxSum);
    }
    avg = maxSum/k;
    return avg.toFixed(5);
};

findMaxAverage([1,12,-5,-6,50,3], 4);