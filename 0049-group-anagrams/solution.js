/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()

    for(let i of strs){
        let word = i

        let arr = new Array(26).fill(0)

        for(let j=0; j<word.length; j++){
            arr[word.charCodeAt(j)-97]++
        }

        let key = arr.join(",")

        map.set(key, map.has(key) ? [...map.get(key), word] : [word])
    
    }

    let res = []

    for(let[key, values] of map){
        res.push(values)
    }

    return res
};
