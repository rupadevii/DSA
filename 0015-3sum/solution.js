/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a-b)
    let res = []

    for(let i=0; i<nums.length; i++){
        if(i>0 && nums[i]===nums[i-1]) continue
        let left = i+1
        let right = nums.length-1

        while(left<right){
            if(nums[i] + nums[left] + nums[right]===0){
                res.push([nums[i], nums[left], nums[right]])
                left++
                right--
                while(left<right && nums[left]===nums[left-1]) left++
            }else if(nums[left] + nums[right] > -nums[i]){
                right--
            }else{
                left++
            }
        }
    }

    return res
};
