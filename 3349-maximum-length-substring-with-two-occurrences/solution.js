/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let map = new Map()

    let left = 0
    let maxLen = 0

    for(let i=0; i<s.length; i++){
        while(map.get(s[i])>=2){
            map.set(s[left], map.get(s[left])-1)
            if(map.get(s[left])===0) map.delete(s[left])
            left++
        }
        map.set(s[i], (map.get(s[i])||0)+1)
        maxLen = Math.max(maxLen, i-left+1)
    }

    return maxLen
};
