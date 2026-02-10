/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    let arr = [];
    for(let i=0; i<s.length; i++){
        arr.push(s[i])
        if(s[i]===part[part.length-1] && arr.slice(-part.length).join("") === part)   {
            arr = arr.slice(0,arr.length-part.length);
        }
    // while(s.includes(part)){
    //    s= s.replace(part, "")
    // }
    // return s
    }
    return arr.join("")
};
