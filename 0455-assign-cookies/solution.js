/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let first = 0;
    let second = 0;
    g.sort((a, b) => a-b)
    s.sort((a, b) => a-b)
    while(first<s.length){
        if(g[second]<=s[first]){
            second++
        }
        first++
    }
    return second
};
