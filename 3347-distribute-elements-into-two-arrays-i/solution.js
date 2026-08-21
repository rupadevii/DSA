/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    let arr = new Array(nums.length)
    arr[nums.length-1] = nums[1]
    arr[0] = nums[0]
    let left = 0
    let right = nums.length-1

    for(let i=2; i<nums.length; i++){
        if(arr[left]>arr[right]){
            arr[++left] = nums[i]
        }
        else arr[--right] = nums[i]
    }

    let end = nums.length-1
    // console.log(right, end)
    while(right<end){
        [arr[right], arr[end]] = [arr[end], arr[right]]
        right++
        end--
    }

    return arr
};
