/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a-b)

    let res = []

    for(let i=0; i<nums.length; i++){
        if(nums[i]===nums[i-1]) continue
        let left = i+1
        let right = nums.length-1

        while(left<right){
            let sum = nums[left]+nums[right]

            if(sum===-nums[i]){
                res.push([nums[i], nums[left], nums[right]])
                right--
                left++
                while(left<right && nums[left]===nums[left-1]) left++
            }else if(sum>-nums[i]){
                right--
            }else{
                left++
            }
        }
    }

    return res
};
