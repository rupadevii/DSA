/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function(word) {
    let pt = 0
    let index = 0
    let str = "abc"
    let count = 0

    while(index<word.length){
        if(word[index]!==str[pt]){
            count++
        }
        else{
            index++
        }
        pt = pt===2 ? 0 : pt+1
    }

    if(word[word.length-1]==="a"){
        count += 2
    }

    if(word[word.length-1]==="b"){
        count++
    }

    return count
};
