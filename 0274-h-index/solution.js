/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let arr = new Array(citations.length+1).fill(0)

    for(let i=0; i<citations.length; i++){
        arr[Math.min(citations.length, citations[i])]++
        // console.log(arr)
    }

    let inx = citations.length
    let papers = arr[inx];

    while(papers < inx){
        inx--
        papers += arr[inx]
    }

    return inx;


};
