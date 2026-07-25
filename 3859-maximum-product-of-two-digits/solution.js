/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let max = 0
    let secondMax = 0

    let temp = n
    while(temp>0){
        let digit = temp%10
        if(digit>max){
            secondMax = max
            max = digit
        }else if(digit>secondMax){
            secondMax = digit
        }
        temp = Math.floor(temp/10)
    }

    return max*secondMax
};
