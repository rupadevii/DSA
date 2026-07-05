/**
 * @param {number[]} nums
 * @return {number}
 */
var maxDigitRange = function(nums) {
    let maxRange = -Infinity
    let totalSum = 0

    for(let i of nums){
        let num = i
        let maxDigit = 0
        let minDigit = Infinity
       
        while(num>0){
            let digit = num%10
            maxDigit = Math.max(digit, maxDigit)
            minDigit = Math.min(digit, minDigit)
            num = Math.floor(num/10)
        }

        let range = maxDigit-minDigit

        if(range>maxRange){
            maxRange = range
            totalSum = i
        }else if(range===maxRange){
            totalSum += i
        }

    }

    return totalSum
};
