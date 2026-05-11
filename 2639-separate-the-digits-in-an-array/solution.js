/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let res = []

    for(let i=0; i<nums.length; i++){
        let arr = []
        let val = nums[i]
        while(val>0){
            arr.push(val%10)
            val = Math.floor(val/10)
        }
        for(let i=arr.length-1; i>=0; i--){
            res.push(arr[i])
        }
    }

    return res
};
