/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // let index = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0] && haystack.substring(i, i + needle.length) === needle) {
            return i
        }
    }
    return -1
};
