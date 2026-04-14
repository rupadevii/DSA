/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let pos = 0;
    let neg = 1;
    let arr = []

    for(let i=0; i<nums.length; i++){
        if(nums[i]>0){
            arr[pos] = nums[i]
            pos += 2
        }
        else if(nums[i]<0){
            arr[neg] = nums[i]
            neg += 2
        }
    }
    return arr
};
