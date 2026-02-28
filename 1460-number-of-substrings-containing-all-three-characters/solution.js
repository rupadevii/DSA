/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let count = 0;
    let map = new Map()
    let left = 0;
    for(let i=0; i<s.length; i++){
        map.set(s[i], map.get(s[i])+1 || 1)
        while(map.has('a') && map.has('b') && map.has('c') ){
            count+=s.length-i
            map.set(s[left], map.get(s[left])-1)
            if(map.get(s[left])===0) map.delete(s[left])
            left++

        }
    }
    return count
};
