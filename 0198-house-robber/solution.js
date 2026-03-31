/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // if(nums.length===2) return Math.max(nums[0], nums[1])
    let arr = []

    arr[0] = nums[0]
    arr[1] = Math.max(nums[0], nums[1])

    for(let i=2; i<nums.length; i++){
        arr[i] = Math.max(arr[i-1], nums[i]+arr[i-2])
        // console.log(arr)
    }

    return arr[nums.length-1]

};
