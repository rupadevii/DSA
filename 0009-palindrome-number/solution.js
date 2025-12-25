/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    let num = x;
    let reversedNum = 0;
    while(x > 0){
        reversedNum = reversedNum * 10 + x % 10;
        x = Math.floor(x/10);
    }
    return reversedNum === num;
};
