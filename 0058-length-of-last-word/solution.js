/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // let str = s.split(" ")
    // return str[str.length-1].length


    for(let i=s.length-1; i>=0; i--){
        let j=i;
        if(s[i]!==" "){
            while(s[j]!==" " && j>=0){
                j--
            }
            return i-j
        }
    }
};
