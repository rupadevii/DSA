/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr = new Array(nums.length)
    let left = 0
    let right = nums.length-1
    let index= nums.length-1

    while(left<=right){
        if(Math.abs(nums[right])>Math.abs(nums[left])){
            arr[index] = nums[right]*nums[right]
            index--
            right--
        }
        else{
            arr[index] = nums[left]*nums[left]
            index--
            left++
        }
    }

    return arr
};
