/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let res = []
    let map = new Map()
    let str = ""
    for(let i=0; i<words.length; i++){
        let arr = new Array(26).fill(0)
    
        for(let j=0; j<words[i].length; j++){
            arr[words[i].charCodeAt(j)-97]++
        }

        let str2 = arr.join(",")
        
        if(str!==str2){
            res.push(words[i])
            str = str2
        }
    }

    return res
};
