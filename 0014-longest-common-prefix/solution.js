/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0]

    for(let i of strs){
        for(let j=0; j<prefix.length; j++){
            if(i[j]!==prefix[j]){
                prefix = prefix.slice(0, j)
                break
            }
        }
    }

    return prefix
};
