/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let map = new Map()

    let left = 0
    let maxLen = 0
    for(let i=0; i<nums.length; i++){
        while(map.get(nums[i])===k){
            map.set(nums[left], map.get(nums[left])-1)
            if(map.get(nums[left])===0) map.delete(nums[left])
            left++
        }
        map.set(nums[i], (map.get(nums[i])||0)+1)
        maxLen = Math.max(i-left+1, maxLen)
    }

    return maxLen
};
