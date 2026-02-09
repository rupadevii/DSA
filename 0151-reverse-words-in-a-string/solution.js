/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim()
    let str = "";
    let index = s.length
    for(let i=s.length-1; i>=0; i--){
        if((s[i] !== " " && s[i-1] === " ")){
            str += s.substring(i, index) + " ";
            index = i
        }  
        else if(s[i] === " "){
            index--
        }
    }
    str += s.substring(0, index)
    return str
    
};
