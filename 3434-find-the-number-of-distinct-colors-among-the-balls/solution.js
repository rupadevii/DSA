/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
    let map = new Map()
    let colors = new Map()
    let res = new Array(queries.length).fill(0)

    for(let i=0; i<queries.length; i++){
        if(!map.has(queries[i][0])){
            colors.set(queries[i][1], (colors.get(queries[i][1])||0)+1)
        }
        else if(map.get(queries[i][0]) !== queries[i][1]){
            let curr = map.get(queries[i][0])
            colors.set(curr, colors.get(curr)-1)
            if(colors.get(curr)===0) colors.delete(curr)
            colors.set(queries[i][1], (colors.get(queries[i][1])||0)+1)
        }
        map.set(queries[i][0], queries[i][1])
        res[i] = colors.size
    }

    return res


};
