/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let map = new Map()

    for(let i=0; i<grid.length; i++){
        map.set(grid[i].join(","), (map.get(grid[i].join(","))||0)+1)
    }
    // console.log(map)

    let count = 0

    for(let i=0; i<grid.length; i++){
        let col = []
        for(let j=0; j<grid.length; j++){
            col.push(grid[j][i])
        }
        if(map.has(col.join(","))) count += map.get(col.join(","))
    }

    return count
};
