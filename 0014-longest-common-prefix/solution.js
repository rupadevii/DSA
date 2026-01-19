/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0]
    
    for(let i=0; i<strs.length; i++){
        let curr = strs[i]
        for(let j=0; j<prefix.length; j++){
            if(curr[j] !== prefix[j] ){
                prefix = prefix.slice(0, j)
            }
        }
    }
    return prefix;
};
