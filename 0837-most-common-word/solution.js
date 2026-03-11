/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.toLowerCase().replace(/[.,;'?!]/g, " ").split(/\s+/);
    let map = new Map()
    let set = new Set(banned)
    for(let i of paragraph){
        if(!set.has(i) && i!== ""){
        map.set(i, (map.get(i)||0)+1)
        }
    }

    let count = 0;
    let word = "";

    for(let [key, value] of map){
        if(value>count){
            count = value;
            word = key
        }
    }
    return word
};
