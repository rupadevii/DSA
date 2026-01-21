/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = new Map();
    for(let i=0; i<s.length; i++){
        if(map.has(s[i])){
            if(t[i] !== map.get(s[i])) return false;
        }
        else{
            map.set(s[i], t[i])
        }
        
    }
    let map2 = new Map();
    for(let i=0; i<t.length; i++){
        if(map2.has(t[i])){
            if(s[i] !== map2.get(t[i])) return false;
        }
        else{
            map2.set(t[i], s[i])
        }
    }
    return true;
};
