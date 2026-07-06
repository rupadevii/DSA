/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a, b) => a[0]===b[0] ? b[1]-a[1] : a[0]-b[0])

    //[1, 4], [2, 8], [3, 6]

    let res = []

    res.push(intervals[0])

    for(let i=1; i<intervals.length; i++){
        //[[1, 4], [1, 2], [3, 4]]
            if(intervals[i][0]>=res[res.length-1][0] && intervals[i][1]<=res[res.length-1][1]){
                continue
            // }else if(intervals[i][0]<=res[res.length-1][0] && intervals[i][1]>=res[res.length-1][1]){
            //     res.pop()
            // }
            }
        
        else{
            res.push(intervals[i])
        }
    }

    return res.length
};
