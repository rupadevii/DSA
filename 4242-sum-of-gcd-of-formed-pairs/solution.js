/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {
    function getGCD(a, b){
        while (b !== 0) {
            let temp = b;
            b = a % b; 
            a = temp; 
        }
        return a;
    }

    let prefixGcd = new Array(nums.length)

    prefixGcd[0] = nums[0]
    let maxNum = nums[0]

    for(let i=1; i<nums.length; i++){
        maxNum = Math.max(maxNum, nums[i])
        prefixGcd[i] = getGCD(maxNum, nums[i])
    }

    prefixGcd.sort((a, b) => a-b)

    let left = 0; 
    let right = prefixGcd.length-1
    let sum = 0

    while(left<right){
        sum += getGCD(prefixGcd[left], prefixGcd[right])
        left++
        right--
    }

    return sum
};
