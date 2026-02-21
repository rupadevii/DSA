/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let sum = nums.reduce((acc, ele) => acc+ele, 0);

    let leftSum = 0;
    let arr = []
    for(let i=0; i<nums.length; i++){
        arr.push(Math.abs(leftSum-(sum-leftSum-nums[i])))
        leftSum += nums[i]
    }

    return arr
};
