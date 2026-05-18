/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    //1 2 3 4 5 6 7
    //7 6 5 4 3 2 1
    //5 6 7 1 2 3 4

    function reverse(left, right){
        while(left<=right){
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
            right--
        }
    }

    reverse(0, nums.length-1)

    k = k%nums.length
    reverse(0, k-1)

    reverse(k, nums.length-1)
};
