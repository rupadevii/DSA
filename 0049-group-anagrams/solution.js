/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()

    for(let i=0; i<strs.length; i++){
        let arr = new Array(26).fill(0)
        let word = strs[i]
        for(let i=0; i<word.length; i++){
            arr[word.charCodeAt(i)-97]++
        }

        let str = arr.join(",")

        if(map.has(str)){
            map.set(str, [...map.get(str), word])
        }
        else{
            map.set(str, [word])
        }

    }
    let res = []

    for(let [key, values] of map){
        res.push(values)
    }

    return res
};
