/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    function findDigits(num){
        let temp = num
        let sum = 0
        while(temp>0){
            sum += temp%10
            temp = Math.floor(temp/10)
        }
       
        return sum
    }

    for(let i=0; i<nums.length; i++){
        if(findDigits(nums[i])===i) return i
    }

    return -1
};
