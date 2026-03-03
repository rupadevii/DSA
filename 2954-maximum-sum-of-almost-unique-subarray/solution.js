/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, m, k) {
    let map = new Map()
    let maxSum = 0;
    let left = 0;
    let sum = 0;
    for(let right=0; right<nums.length; right++){
        while(right-left+1>k){
            sum -= nums[left]
            map.set(nums[left], map.get(nums[left])-1)
            if(map.get(nums[left])===0) map.delete(nums[left])
            left++
        }
        map.set(nums[right], map.get(nums[right])+1||1)
        sum += nums[right]
        if(map.size>=m && right-left+1===k){
        maxSum = Math.max(maxSum, sum)

        }
    }
    return maxSum
};
