/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(p.length>s.length) return []
    let arr = []
    let map1 = new Map()
    let map2 = new Map();

    for(let i=0; i<p.length; i++){
        map1.set(s[i], map1.get(s[i])+1 || 1);
        map2.set(p[i], map2.get(p[i])+1 || 1);
    }

    let isEqual = true
    for(let [key, value] of map1){
        if(!map2.has(key) || map2.get(key) !== value) isEqual = false
    }

    if(isEqual) arr.push(0)

    let left = 0;
    for(let right = p.length; right<s.length; right++){
        map1.set(s[right], map1.get(s[right])+1 || 1);
        if(map1.get(s[left])===1){
            map1.delete(s[left]);
        }else{
            map1.set(s[left], map1.get(s[left])-1)
        }
        left++;
        isEqual = true
        for(let [key, value] of map1){
            if(!map2.has(key) || map2.get(key) !== value) isEqual = false
        }

        if(isEqual) arr.push(left)
    }
    return arr
};
