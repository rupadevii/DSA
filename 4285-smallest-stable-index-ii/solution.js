/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    let min = new Array(nums.length)
    min[nums.length-1] = nums[nums.length-1]

    for(let i=nums.length-2; i>=0; i--){
        min[i] = Math.min(min[i+1], nums[i])
    }

    let max = 0
    for(let i=0; i<nums.length; i++){
        max = Math.max(max, nums[i])
        if(max-min[i]<=k) return i
    }

    return -1
};
