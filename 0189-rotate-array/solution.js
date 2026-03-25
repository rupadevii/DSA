/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // let arr = []
    if(nums.length===1) return nums

    [7, 6, 5, 4, 3, 2, 1]

    function rotate(left, right){
        while(left<=right){
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++;
            right--
        }
    }

    k=k%nums.length

    rotate(0, nums.length-1)

    rotate(0, k-1)

    rotate(k, nums.length-1)


};
