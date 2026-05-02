/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let map = new Map()
    let set = new Set()
    let arr = []
    for(let i of s){
        map.set(i, (map.get(i)||0)+1)
    }
    // console.log(map)
    
    for(let i of s){
        if(arr.length===0){
            arr.push(i)
            set.add(i)
            map.set(i, map.get(i)-1)
        }else{
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
        // console.log(map, set, arr)
       }
       return arr.join("")
};
