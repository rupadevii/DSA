/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, m, k) {
    let maxSum = 0
    let sum = 0
    let map = new Map()

    for(let i=0; i<k; i++){
        sum += nums[i]
        map.set(nums[i], (map.get(nums[i])||0)+1)
    }

    if(map.size>=m){
        maxSum = sum
    }

    for(let i=k; i<nums.length; i++){
        sum += nums[i]
        map.set(nums[i], (map.get(nums[i])||0)+1)
        sum -= nums[i-k]
        map.set(nums[i-k], map.get(nums[i-k])-1)
        if(map.get(nums[i-k])===0) map.delete(nums[i-k])

        if(map.size>=m){
            maxSum = Math.max(maxSum, sum)
        }
    }

    return maxSum
};

