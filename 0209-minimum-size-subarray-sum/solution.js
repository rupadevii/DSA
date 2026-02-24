/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLen = Infinity;
    let left = 0;
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
        //update the minlen, remove the left most element and increase the left pointer as long as the sum of the current window is greater than the target
        while(sum>=target){
            minLen = Math.min(minLen, i-left+1)
            sum-=nums[left]
            left++
        }
    }
    return minLen === Infinity ? 0 : minLen
};
