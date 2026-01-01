/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let map = new Map();

    for(let i of s){
        map.set(i, map.get(i) + 1 || 1)
    }

    for(let i of t){
        if(!map.has(i) || map.get(i) === 0){
            return false;
        }
        map.set(i, map.get(i) - 1)
    }
    return true;
};
