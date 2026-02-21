/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let sum = nums.reduce((acc, ele) => acc+ele, 0)
    // let arr1 = Array(nums.length).fill(0)

    let sum1 = 0;
    // for(let i=0; i<nums.length; i++){
    //     arr1[i] += sum1;
    //     sum1 += nums[i]
    // }

    // let arr2 = Array(nums.length).fill(0)
    // let sum2=0
    // for(let i=nums.length-1; i>=0; i--){
    //     arr2[i] += sum2;
    //     sum2 += nums[i]
    // }

    for(i=0; i<nums.length; i++){
        if(sum1 === sum - nums[i] - sum1) return i
        sum1 += nums[i]
    }

    return -1
};
