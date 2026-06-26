/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let num = nums[0]

    return nums.every(val => val===num) ? 0 : 1
};
