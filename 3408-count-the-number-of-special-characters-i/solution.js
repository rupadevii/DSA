/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let set = new Set()
    let count = 0

    for(let i=0; i<word.length; i++){
        if(word.charCodeAt(i)>=97 && word.charCodeAt(i)<=122){
            set.add(word[i])
        }
    }

    for(let i=0; i<word.length; i++){
        if((word.charCodeAt(i)>=65 && word.charCodeAt(i)<=90) && set.has(word[i].toLowerCase())){
            count++
            set.delete(word[i].toLowerCase())
        }
    }
    return count
};
