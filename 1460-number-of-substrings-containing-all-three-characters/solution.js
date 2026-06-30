/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let left = 0
    let map = new Map()
    let count = 0

    for(let right=0; right<s.length; right++){
        map.set(s[right], (map.get(s[right])||0)+1)

        while(map.has('a')&& map.has('b')&& map.has('c')){
            count += s.length-right

            map.set(s[left], map.get(s[left])-1)

            if(map.get(s[left])===0){
                map.delete(s[left])
            }

            left++
        }
    }

    return count
};
