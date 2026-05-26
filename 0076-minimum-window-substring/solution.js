/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(s.length<t.length) return ""

    // if(s.length===1 && s[0]!==t[0]) return ""
    let map = new Map()

    for(let i of t){
        map.set(i, (map.get(i)||0)+1)
    }

    let left = 0
    let minLen = Infinity
    let minLeft = 0
    let minRight = -1
    let map2 = new Map()
    for(let right=0; right<s.length; right++){
        map2.set(s[right], (map2.get(s[right])||0)+1)

        while(check()){
            if(right-left+1<minLen){
                minLen = right-left+1
                minLeft = left
                minRight = right
            }
            map2.set(s[left], map2.get(s[left])-1)
            if(map2.get(s[left])===0){
                map2.delete(s[left])
            }
            left++

        }
    }

    function check(){
        let isMatch = true

        for(let [key, value] of map){
            if(!map2.has(key) || map2.get(key)<value){
                isMatch = false
                break
            }
        }

        return isMatch
    }

    return s.substring(minLeft, minRight+1)
};
