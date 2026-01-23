/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if(s.length === 0) return 0;
   let count = s[0]===" " ? 0 : 1;
   for(let i=0; i<s.length; i++){
    if(s[i]!== " " && s[i-1] === " " )count++
   }
   return count
};
