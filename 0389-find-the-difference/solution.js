/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map = new Map();
    for(let i=0; i<s.length; i++){
        map.set(s[i], map.get(s[i])+1 || 1)
    }
    for(let i=0; i<t.length; i++){
        if(!map.has(t[i]) || map.get(t[i]) === 0) return t[i]
        else map.set(t[i], map.get(t[i]) - 1)
    }
};
