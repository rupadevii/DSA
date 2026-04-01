/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let arr = []
    let first = 0;
    let second = 0;
    // while(first<word1.length || second<word2.length){
    //     if(word1[first]) arr.push(word1[first++])
    //     if(word2[second]) arr.push(word2[second++])
    // }
    for(let i=0; i<Math.max(word1.length, word2.length); i++){
        if(word1[i]) arr.push(word1[i])
        if(word2[i]) arr.push(word2[i])
    }
    return arr.join("")
};
