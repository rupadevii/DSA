/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let ans = 0
    let low = 0
    let high = nums.length-1

    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(nums[mid]>nums[nums.length-1]){
            low = mid+1
        }else{
            high = mid-1
        }
    }
    return nums[low]
};
