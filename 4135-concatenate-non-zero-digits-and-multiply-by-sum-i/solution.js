/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    // 25689
    let sum = 0
    let x = 0
    let temp = n
    let pow = 0

    while(temp>0){
        // console.log(temp)
        sum += temp%10
        if(temp%10 !== 0) x=Math.pow(10, pow++)*(temp%10)+x
        temp = Math.floor(temp/10)
    }

    return x*sum
};
