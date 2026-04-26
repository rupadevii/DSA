/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let j=0
    while(nums[j]===nums[j+1]){
        j++
    }

    let increasing = nums[j]<nums[j+1]

    if(increasing){
        for(let i=1; i<nums.length; i++){
            if(nums[i]>nums[i+1]) return false
        }
        return true
    }
    else{
        for(let i=1; i<nums.length; i++){
            if(nums[i]<nums[i+1]) return false
        }
        return true
    }
};
