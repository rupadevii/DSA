/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=2) return n;
    
    first = 1;
    second = 2;
    for(let i=3; i<=n; i++){
        let temp = first + second;
        first = second;
        second = temp
        
    }
    return second
};
