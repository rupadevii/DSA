/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    while(n>9){
        n = String(n)
        let temp = n;
        n = 0
        for(let i of temp){
            n += i*i
        }
    }
    
    return n==1 || n==7
};
