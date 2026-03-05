/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // let arr = []
    // for(let i=0; i<nums.length; i++){
    //     if(i+k >= nums.length){
    //         arr[(i+k)%nums.length] = nums[i]
    //     }
    //     arr[i+k] = nums[i]

    // }
    // for(let i=0; i<nums.length; i++){
    //     nums[i] = arr[i]
    // }
    k = k%nums.length

    function rotateArray(left, right){
        while(left<right){
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--
        }
    }

    let left = 0;
    let right = nums.length-1;
    rotateArray(left, right)

    left = 0;
    right = k-1;
    rotateArray(left, right)

    left = k;
    right = nums.length-1;
    rotateArray(left, right)
    
};
