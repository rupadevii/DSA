/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numsSum = nums.reduce((acc, val) => acc+val, 0)
    const sum = (nums.length*(nums.length+1))/2;
    return sum - numsSum;
};
