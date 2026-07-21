/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(rectangles) {
    let map = new Map()
    let count = 0

    for(let i of rectangles){
        let ratio = i[0]/i[1]

        if(map.has(ratio)){
            count += map.get(ratio)
        }
        map.set(ratio, (map.get(ratio)||0)+1)
    }

    return count
};
