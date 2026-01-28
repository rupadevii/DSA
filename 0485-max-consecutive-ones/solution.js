/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let length = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 1) length++;
        if(nums[i] === 0) length = 0;
        max = Math.max(max, length);
    }
    return max;
};
