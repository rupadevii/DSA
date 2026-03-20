/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map1 = new Map()
    let map2 = new Map()
    s = s.split(" ")
    if(s.length !== pattern.length) return false

    for(let i=0; i<pattern.length; i++){
        if(map1.has(pattern[i]) && map1.get(pattern[i])!==s[i]) return false
        map1.set(pattern[i], s[i])
        if(map2.has(s[i]) && map2.get(s[i]) !== pattern[i]) return false
        map2.set(s[i], pattern[i])
    }

    // for(let i=0; i<s.length; i++){
    //     if(map2.has(s[i])){
    //         if(map2.get(s[i]) !== pattern[i]) return false
    //     }
    //     else{
    //         map2.set(s[i], pattern[i])
    //     }
    // }

    return true
};
