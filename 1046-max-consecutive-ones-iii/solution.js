/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let right = 0;
    let count = 0;
    let maxLen = 0;

    while(right<nums.length){
        if(nums[right]===0) count++
        while(count>k){
            if(nums[left]===0) count--
            left++
        }
        maxLen = Math.max(maxLen, right-left+1)
        right++
    }

    return maxLen
};
