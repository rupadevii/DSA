/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0]-b[0])
    let st = []
    st.push(intervals[0])

    for(let i=1; i<intervals.length; i++){
        if(intervals[i][0]<=st[st.length-1][1]){
            st[st.length-1][1] = Math.max(intervals[i][1], st[st.length-1][1])
        }else{
            st.push(intervals[i])
        }
    }

    return st
};
