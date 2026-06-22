/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let map = new Map()

    let str = "balloon"

    for(let i of text){
        map.set(i, (map.get(i)||0)+1)
    }

    let min = 1e9

    for(let i of str){
        if(!map.has(i)||map.get('l')<2||map.get('o')<2){
            return 0
        }
        if(i==="l" || i==="o"){
            min = Math.min(Math.floor(map.get(i)/2), min)
        }
        else if(map.get(i)<=min){
            min = map.get(i)
        }
    }

    return min
    
};
