/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if(s.length === 1) return false
    let str = ""
    for(let i=0; i<s.length/2; i++){
        str+=s[i]
        if(str.repeat(Math.floor(s.length/str.length)) === s) return true 
    }
    return false
};
