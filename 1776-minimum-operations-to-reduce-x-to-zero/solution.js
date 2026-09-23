/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let totalSum = nums.reduce((acc, ele) => acc+ele, 0)
    if(x>totalSum) return -1
    let sum = totalSum - x

    let left = 0
    let val = 0
    let max = -Infinity

    for(let i=0; i<nums.length; i++){
        val += nums[i]
        while(val > sum){
            val -= nums[left]
            left++
        }

        if(val === sum){
            max = Math.max(max, i-left+1)
        }
    }

    return max===-Infinity ? -1 : nums.length-max


};
