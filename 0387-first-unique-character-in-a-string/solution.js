/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    for(let i=0; i<s.length; i++){
        map.set(s[i], map.get(s[i])+1 || 1)
    }

    for(let [key, value] of map){
        if(value===1){
            return s.indexOf(key)
        }
    }
    return -1
};
