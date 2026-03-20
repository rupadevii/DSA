/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()

    for(let i=0; i<strs.length; i++){
        let arr = new Array(26).fill(0)
        
        for(let j=0; j<strs[i].length; j++){
            arr[(strs[i].charCodeAt(j)-97)]++
        }

        arr = arr.join(",")
        
        if(map.has(arr)){
       
            map.set(arr, [...map.get(arr), strs[i]])
        }else{
        map.set(arr, [strs[i]])

        }
        
    }
    let arr2 = []

    for(let [key, value] of map){
        arr2.push(value)
    }

    return arr2
};
