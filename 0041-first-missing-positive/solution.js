/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for(let i=0; i<nums.length; i++){
        if(nums[i]<0) nums[i] = 0
    }
    // console.log(nums)

    for(let i=0; i<nums.length; i++){
        if(Math.abs(nums[i])>=1 && Math.abs(nums[i])<=nums.length){
            let val = Math.abs(nums[i])

            if(nums[val-1]>0){
                nums[val-1] = -1*nums[val-1]
            }else if(nums[val-1]===0){
                nums[val-1] = -1*(nums.length+1)
            }
        }
    }

    for(let i=1; i<nums.length+1; i++){
        if(nums[i-1]>=0) return i
    }

    return nums.length+1
};

