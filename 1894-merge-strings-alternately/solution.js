/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let str = ''
    let first = 0;
    let second = 0;
    while(first<word1.length || second<word2.length){
        str+=word1[first++] || ""
        str+=word2[second++] || ""
    }
    return str
};
