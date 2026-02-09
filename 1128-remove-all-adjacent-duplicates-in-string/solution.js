/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let arr = [];
    arr[0] = s[0];
    for(let i=1; i<s.length; i++){
        if(s[i]===arr[arr.length-1]){
            arr.pop()
        }else{
            arr.push(s[i])
        }
    }
    return arr.join("")
};
