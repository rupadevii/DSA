/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let start = 0;
    let num = x;
    while(start <= num){
        let mid = Math.floor((start + num)/2);
        if((mid * mid) === x) return mid;
        else if((mid * mid) < x) start = mid + 1;
        else num = mid - 1;
    }
    return start-1;
};
