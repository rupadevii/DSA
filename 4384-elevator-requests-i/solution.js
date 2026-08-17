/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function(n, requests) {
    let count = requests[0]

    for(let i=1; i<requests.length; i++){
        count += Math.abs(requests[i]-requests[i-1])
    }

    return count
};
