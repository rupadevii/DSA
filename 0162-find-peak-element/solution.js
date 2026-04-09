/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length-1

    while(left<=right){
        let mid = Math.floor((left+right)/2)
        // console.log(nums[mid], nums[mid-1], nums[mid+1])
        if((nums[mid]>nums[mid-1]||nums[mid-1]===undefined) && (nums[mid]>nums[mid+1]||nums[mid+1]===undefined)){
            return mid
        }
        else if(nums[mid]<nums[mid-1]){
            right = mid-1
        }
        else if(nums[mid]<nums[mid+1]){
            left = mid+1
        }
    }
};
