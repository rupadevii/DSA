/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    let map = new Map()
    let set = new Set()
    let arr = []
    for(let i of s){
        map.set(i, (map.get(i)||0)+1)
    }

    for(let i of s){
        while(!set.has(i) && map.get(arr[arr.length-1])>=1 && arr[arr.length-1]>i){
            set.delete(arr[arr.length-1])
            arr.pop()
        }
        if(!set.has(i)){
            arr.push(i)
            set.add(i)
        }
        map.set(i, map.get(i)-1)
       }
       return arr.join("")
};
