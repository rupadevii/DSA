/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a, b) => a[0]===b[0] ? b[1]-a[1] : a[0]-b[0])
    let count = 1
    let curr0 = intervals[0][0]
    let curr1 = intervals[0][1]

    for(let i=1; i<intervals.length; i++){
        //[[1, 4], [1, 2], [3, 4]]
            if(intervals[i][0]>=curr0 && intervals[i][1]<=curr1){
                continue
            }
        else{
            curr0 = intervals[i][0]
            curr1 = intervals[i][1]
            count++
        }
    }

    return count
};
