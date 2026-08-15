/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    let xor = 0;

    for(let i of nums){
        xor ^= i
    }

    if(xor > 0) return nums.length
    return nums.every(item => item===0) ? 0 : nums.length-1
};
