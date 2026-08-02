/**
 * @param {number[]} nums
 * @return {number}
 */
var maxPairStrength = function(nums) {
    function getGCD(a, b){
        while(b!==0){
            let temp = b
            b = a%b
            a = temp
        }
        return a
    }

    let max = 0
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            let strength = (nums[i]*nums[j]) / (getGCD(nums[i], nums[j]))**2
            max = Math.max(strength, max)
        }
    }

    return max
};
