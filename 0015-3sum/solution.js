/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a-b)
    let res = []

    for(let i=0; i<nums.length; i++){
        if(nums[i]===nums[i-1]) continue
        let num = nums[i]

        let left = i+1
        let right = nums.length-1

        while(left<right){
            if(nums[left]+nums[right]===-num){
                res.push([num, nums[left], nums[right]])
                left++
                right--
                while(nums[left]===nums[left-1]) left++
            }
            else if(nums[left]+nums[right]<-num){
                left++
            }else{
                right--
            }
        }
    }

    return res
};
