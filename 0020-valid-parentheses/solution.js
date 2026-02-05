/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    let chars = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for(let i of s){
        if(!chars[i]) arr.push(i)
        else if(arr.pop() !== chars[i]) return false
    }
    return arr.length === 0
};
