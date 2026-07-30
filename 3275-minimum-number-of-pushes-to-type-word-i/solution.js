/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let mod = word.length%8
    if(word.length <= 8){
        return word.length
    }else if(word.length < 16){
        return 8+(mod*2)
    }else if(word.length < 24){
        return 24 + (mod*3)
    }else{
        return 48 + (mod*4)
    }
    
};
