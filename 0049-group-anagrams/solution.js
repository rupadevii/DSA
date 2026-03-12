/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // function isAnagram(s, t){
    //     let map = new Map()

    //     for(let i of s){
    //         map.set(i, map.get(i) +1 || 1)
    //     }

    //     for(let i of t){
    //         if(!map.has(i) || map.get(i) === 0){
    //             return false
    //         }
    //         map.set(i, map.get(i)-1)
    //     }
    //     return true
    // }

    let res = []

    let map = new Map()
    
    map.set(strs[0].split("").sort().join(""), [strs[0]])
    for(let i=1; i<strs.length; i++){
        if(map.has(strs[i].split("").sort().join(""))){
            map.set(strs[i].split("").sort().join(""), [...map.get(strs[i].split("").sort().join("")), strs[i]])
        }else{
            map.set(strs[i].split("").sort().join(""), [strs[i]])

        }
    }
    for(let [key, value] of map){
        res.push(value)
    }
    

    return res
};
