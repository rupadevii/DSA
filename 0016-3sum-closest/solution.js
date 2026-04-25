/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a-b)
    let minSum = 0
    let minDiff = Infinity

    for(let i=0; i<nums.length; i++){
        let left = i+1
        let right = nums.length-1
        let sum = 0
        while(left<right){
            sum = nums[left]+nums[right]+nums[i]
            // if(Math.abs(target-sum)<minDiff){
            //     minDiff = target-sum
            //     minSum = sum
            // }
            if(Math.abs(sum-target)<minDiff){
                minDiff = Math.abs(sum-target)
                minSum = sum
            }
            // if(sum===target) return sum
            else if(sum>target) right--
            else left++
        }
    }
    return minSum
};
