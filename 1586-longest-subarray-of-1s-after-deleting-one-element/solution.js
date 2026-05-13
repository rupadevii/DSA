/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0;
    let maxLen = 0;
    let count = 0;
    for(let right = 0; right<nums.length; right++){
        if(nums[right]===0){
            count++
        }
        while(count>1){
            if(nums[left]===0){
                count--
            }
            left++
        }
        maxLen = Math.max(right-left+1, maxLen)

    }

    return maxLen-1
};
