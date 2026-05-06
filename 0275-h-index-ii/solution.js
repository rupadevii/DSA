/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    // if(citations.length===1) return citations[0]
    let left = 0;
    let right = citations.length-1
    let res = 0

    while(left<=right){
        let mid = Math.floor((left+right)/2)

        if(citations[mid]>=citations.length-mid){
            res = citations.length-mid
            right = mid-1
        }
        else{
            left = mid+1
        }
    }

    return res
   
};
