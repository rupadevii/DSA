/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let ptr = 0

    for(let i=0; i<s.length; i++){
        if(s[i]===t[ptr]){
            ptr++
        }
    }

    return t.length-ptr
};
