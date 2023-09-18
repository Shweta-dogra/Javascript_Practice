// Given a sorted array of distinct integers and a target value, return the index if the target is found.
//  If not, return the index where it would be if it were inserted in order.

//  Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

var searchInsert = function(nums, target) {
    let i =0;
    while(nums[i]<target){
        i++;
    }
    return i;
};

//using binary search
var search = function(nums, target) {
let lo = 0, hi = nums.length-1;
	while (lo < hi) {
		let mid = lo + Math.floor((hi-lo+1)/2);
		if (target < nums[mid]) {
			hi = mid - 1
		} else {
			lo = mid; 
		}
	}
	return nums[lo]==target?lo:-1;
}