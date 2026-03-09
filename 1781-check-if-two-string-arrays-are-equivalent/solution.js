/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let str1 = ""
    for(let i of word1){
        str1 += i
    }
    let str2 = ""
    for(let i of word2){
        str2 += i
    }
    return str1===str2
};
