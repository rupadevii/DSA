/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    function productOfDigits(num){
        let temp = num
        let product = 1
        while(temp>0){
            product *= temp%10
            temp = Math.floor(temp/10)
        }
        return product
    }

    let res = 0
    let i=n
    while(i>=n){
        if(productOfDigits(i)%t===0){
            res = i
            break
        }
        i++
    }

    return res
};
