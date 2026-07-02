/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
    items.sort((a, b) => a[0]-b[0])

    let queriesNew = []

    for(let i=0; i<queries.length; i++){
        queriesNew.push([queries[i], i])
    }

    queriesNew.sort((a, b) => a[0]-b[0])

    let res = []
    // res[0] = 0
    // let idx = 0
    // while(idx<items.length && items[idx][0]<=queries[0]){
    //     res[0] = Math.max(res[0], items[idx][1])
    //     idx++
    // }
    // let idx2 = 0
    
    let index = 0
    let ans = 0
    for(let i=0; i<queriesNew.length; i++){
        
        while(index<items.length && items[index][0]<=queriesNew[i][0]){
            ans = Math.max(ans, items[index][1])
            index++
        }

        res[queriesNew[i][1]] = ans
    }

    return res
};
















