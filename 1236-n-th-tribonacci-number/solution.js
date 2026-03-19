/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n===0) return 0
    if(n===1 || n===2) return 1;
    let first = 0, second = 1, third = 1;
    
    for(let i=3; i<=n; i++){
        let temp = third+second+first;
        first = second
        second = third;
        third = temp
    }
    return third
};
