/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let start = 0
    s = s.split("")

    while(start<s.length){
        reverse(start, start+k-1)

        start = start+2*k
    }

    function reverse(start, end){
        while(start<=end){
            [s[start], s[end]] = [s[end], s[start]]
            start++
            end--
        }
    }

    return s.join("")

};
