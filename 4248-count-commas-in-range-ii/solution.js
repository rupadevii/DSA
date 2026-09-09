/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let res = 0
    let min = 1000

    while(min<=n){
        res += n-min+1
        min *= 1000
    }

    return res
};
