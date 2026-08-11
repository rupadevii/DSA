/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let res = 0
    let left = 0

    let sum = nums[0]
    for(let i=1; i<nums.length; i++){
        if(nums[i]-nums[i-1]===1){
            sum += nums[i]
        }else{
            break
        }
    }

    let set = new Set(nums)

    while(set.has(sum)){
        sum++
    }

    return sum
};
