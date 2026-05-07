/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let arr = new Array(citations.length+1).fill(0)

    for(let i=0; i<citations.length; i++){
        arr[Math.min(citations.length, citations[i])]++
    }

    let papers = 0
    for(let i=citations.length; i>=0; i--){
        papers += arr[i]
        if(papers>=i) return i
    }
    // console.log(arr)
};
