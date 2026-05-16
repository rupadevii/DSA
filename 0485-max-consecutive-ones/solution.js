/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxLen = 0
    let len = 0

    for(let i=0; i<nums.length; i++){
        if(nums[i]===1) len++
        else len = 0
        maxLen = Math.max(len, maxLen)
    }

    return maxLen
};
