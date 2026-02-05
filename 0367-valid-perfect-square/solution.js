/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 0;
    let right = num;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(mid**2 === num) return true;
        if(mid**2 > num) right=mid-1;
        else left = mid + 1;
    }
    return false;
};





