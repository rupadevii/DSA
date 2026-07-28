/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    s = s.split("")

    let left = s.slice(0, Math.floor(s.length/2))
    let center = s.length%2===0 ? "" : s[Math.floor(s.length/2)]

    left.sort((a, b) => a.localeCompare(b))

    return left.join("").concat(center, left.reverse().join(""))
};
