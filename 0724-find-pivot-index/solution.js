/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = nums.reduce((acc, ele) => acc+ele, 0)
    let sum = 0

    for(let i=0; i<nums.length; i++){
        if(sum === total-sum-nums[i]) return i
        sum += nums[i]
    }

    return -1
};
