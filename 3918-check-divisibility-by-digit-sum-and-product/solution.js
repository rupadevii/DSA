/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let sum = 0
    let product = 1

    let temp = n
    while(temp>0){
        let digit = temp%10
        sum += digit
        product *= digit
        temp = Math.floor(temp/10)
    }
    
    let total = sum + product

    return n%total===0
};
