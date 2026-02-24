/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(k<=1) return 0
    let count = 0;
    let left = 0;
    let product = 1;
    for(let i=0; i<nums.length; i++){
        product *= nums[i];
        
        while(product>=k){
            product/=nums[left];
            left++
        }

        count+= i-left+1;
        
    }
    return count;
};
