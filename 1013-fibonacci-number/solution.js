/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n===0) return 0;
    if(n===1) return 1;
    
    let first = 0;
    let second = 1;

    for(let i=2; i<=n; i++){
        let temp = first + second
        first = second;
        second = temp
    }
    return second
};
