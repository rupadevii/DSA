/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperationsToMakeMedianK = function(nums, k) {
    nums.sort((a, b) => a-b)

    //2, 5, 5, 6, 8
    //2, 4, 4, 6, 8

    let median = nums.length%2===0 ? nums.length/2 : Math.floor(nums.length/2)

    let count = 0

    for(let i=0; i<nums.length; i++){
        if(i<median){
            if(nums[i]>k){
                count += nums[i]-k
                nums[i] = k
            }
        }else if(i>median){
            if(nums[i]<k){
                count += k-nums[i]
                nums[i] = k
            }
        }else{
            count += nums[i]>k ? nums[i]-k : k-nums[i]
            nums[i] = k
        }
    }

    return count
};
