/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let rev = ''
    let temp = n

    while(temp>0){
        rev += temp%10
        temp = Math.floor(temp/10)
    }
    return Math.abs(n-Number(rev))
};
