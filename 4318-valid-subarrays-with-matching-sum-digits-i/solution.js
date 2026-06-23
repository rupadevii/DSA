/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var countValidSubarrays = function(nums, x) {
    let count = 0
    for(let i=0; i<nums.length; i++){
        let sum = 0
        for(let j=i; j<nums.length; j++){
            sum += nums[j]
            let temp = sum
            while(temp>9){
                temp = Math.floor(temp/10)
            }
            // console.log(temp, sum)
            if(temp===x && sum%10===x) count++
        }
    }

    return count
};
