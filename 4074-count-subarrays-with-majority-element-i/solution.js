/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    let count = 0

    for(let i=0; i<nums.length; i++){
        let currCount = 0
        for(let j=i; j<nums.length; j++){
            if(nums[j]===target){
                currCount++
            }
            if(2*currCount>j-i+1) count++
            // console.log(nums[j], currCount, count)
        }
    }

    return count
};
