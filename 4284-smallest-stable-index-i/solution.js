/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    let max = []
    max[0] = nums[0]
    let min = new Array(nums.length)
    min[nums.length-1] = nums[nums.length-1]
    // console.log(min)

    for(let i=1; i<nums.length; i++){
        max[i] = Math.max(max[i-1], nums[i])
    }

    for(let i=nums.length-2; i>=0; i--){
        min[i] = Math.min(min[i+1], nums[i])
    }

    let res = []
    for(let i=0; i<nums.length; i++){
        res[i] = max[i]-min[i]
    }

    for(let i=0; i<res.length; i++){
        if(res[i]<=k) return i
    }

    return -1
};
