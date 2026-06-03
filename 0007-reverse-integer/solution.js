/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0

    let num = Math.abs(x)
    // let n = 0
    while(num>0){
        // console.log(Math.pow(10, n))
        res = (res*10) + (num%10)
        // n++
        num = Math.floor(num/10)
    }

    // let ans = Number(res.join(""))

    if(res>2**31-1 || res<-(2**31)) return 0
    return x>0 ? res : -res
};
