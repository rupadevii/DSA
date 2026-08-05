/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function(message, bannedWords) {
    let set = new Set(bannedWords)

    let count = 0

    for(let i of message){
        if(set.has(i)) count++
    }

    return count>=2
};
