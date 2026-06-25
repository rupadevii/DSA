/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
var toggleLightBulbs = function(bulbs) {
    let set = new Set()

    for(let i of bulbs){
        if(set.has(i)){
            set.delete(i)
        }else{
            set.add(i)
        }
    }

    return Array.from(set).sort((a, b) => a-b)
};
