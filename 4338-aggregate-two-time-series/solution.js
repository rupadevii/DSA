/**
 * @param {number[][]} series1
 * @param {number[][]} series2
 * @return {number[][]}
 */
var aggregateTimeSeries = function(series1, series2) {
    let first = 0, second = 0

    let res = []

    while(first<series1.length || second<series2.length){
        let s1 = first<series1.length ? series1[first][1] : 0
        let s2 = second<series2.length ? series2[second][1] : 0

        // res.push([series1[first][0], s1+s2])
        
        if(first<series1.length && second<series2.length && series1[first][0]===series2[second][0]){
            res.push([series1[first][0], s1+s2])
            first++
            second++
        }else if(second>=series2.length || (first<series1.length && series1[first][0]<series2[second][0])){
            res.push([series1[first][0], s1+s2])
            first++
        }else{
            res.push([series2[second][0], s1+s2])
            second++
        }
    }

    return res
};
