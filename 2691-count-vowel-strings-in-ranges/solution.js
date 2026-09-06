/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    let arr = new Array(words.length)

    function isValid(word){
        let set = new Set(["a", "e", "i", "o", "u"])
        if(set.has(word[0]) && set.has(word[word.length-1])) return true
        else return false
    }

    arr[0] = isValid(words[0]) ? 1 : 0

    for(let i=1; i<words.length; i++){
        arr[i] = isValid(words[i]) ? arr[i-1]+1 : arr[i-1] 
    }

    let res = new Array(queries.length)
    // console.log(arr)

    for(let i=0; i<queries.length; i++){
        let end = queries[i][1]
        let start = queries[i][0]
        res[i] = start === 0 ? arr[end] : arr[end]-arr[start-1]
    }

    return res
};
