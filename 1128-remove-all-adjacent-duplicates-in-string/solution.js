/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let arr = []
    arr.push(s[0])
    for(let i=1; i<s.length; i++){
        arr[arr.length-1]===s[i] ? arr.pop() : arr.push(s[i])
    }

    return arr.join("")
};
