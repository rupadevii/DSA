/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromic = function(s) {
    let str = ''

    for(let i=0; i<s.length; i++){
        str += (s.charCodeAt(i)).toString(2).padStart(8, '0')
    }

    let left = 0
    let right = str.length-1

    while(left<=right){
        if(str[left]!==str[right]) return false
        left++
        right--
    }

    return true
};
