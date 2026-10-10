/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t==="") return ""
    let tMap = new Map()

    for(let i of t){
        tMap.set(i, (tMap.get(i)||0)+1)
    }

    let left = 0, res = [], minLen = Infinity
    let sMap = new Map()
    let curr = 0, req = tMap.size

    for(let right=0; right<=s.length; right++){
        if(tMap.has(s[right])){
            sMap.set(s[right], (sMap.get(s[right])||0)+1)
        }

        if(tMap.has(s[right]) && sMap.get(s[right])===tMap.get(s[right])){
            curr++
        }

        while(curr===req){
            if(right-left+1 < minLen){
                res = [left, right]
                minLen = right-left+1
            }

            sMap.set(s[left], sMap.get(s[left])-1)

            if(tMap.has(s[left]) && sMap.get(s[left])<tMap.get(s[left])) curr--

            left++
        }
    }

    return minLen===Infinity ? '' : s.slice(res[0], res[1]+1)
};
