/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a-b)
    let res = []
    // let set = new Set()
    for(let i=0; i<nums.length; i++){
        let curr = nums[i]
        let left = i+1;
        let right = nums.length-1;
        if(i>0 && nums[i]===nums[i-1]) continue
        while(left<right){
            if(nums[left]+nums[right]===-curr){
                res.push([nums[left], nums[right], curr])
                left++
                right--
                while(left<right && nums[left]===nums[left-1]) left++
            }
            else if(nums[left]+nums[right]>-curr){
                right--
            }
            else{
                left++
            }
        }
        
    }
    return res
};
