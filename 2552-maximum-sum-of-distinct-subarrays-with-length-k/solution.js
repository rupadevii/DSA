/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let set = new Set()

    let left = 0
    let maxSum = 0
    let sum = 0

    for(let right=0; right<nums.length; right++){
        while(set.has(nums[right])){
            sum -= nums[left]
            set.delete(nums[left])
            left++
        }

        sum += nums[right]
        set.add(nums[right])

        if(right-left+1===k){
            maxSum = Math.max(maxSum, sum)
            set.delete(nums[left])
            sum -= nums[left]
            left++
        }
    }

    return maxSum
};
