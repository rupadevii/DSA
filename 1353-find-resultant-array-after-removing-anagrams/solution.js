/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let arr = []
    arr[0] = words[0]
    for(let i=1; i<words.length; i++){
        if(words[i].split("").sort().join("") === words[i-1].split("").sort().join("")){
            continue
        }
        arr.push(words[i])
    }
    return arr
};
