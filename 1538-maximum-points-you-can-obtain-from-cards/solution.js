/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    // let left = 0;
    // let right = 0;
    // let maxSum = 0;

    // for(let i=0; i<k; i++){
    //     left += cardPoints[i]
    // }

    // maxSum = left
    // let index = cardPoints.length-1;

    // for(let i=k-1; i>=0; i--){
    //     left -= cardPoints[i]
    //     right += cardPoints[index--]
    //     maxSum = Math.max(maxSum, left+right)
    // }

    // return maxSum

    let maxPoints = cardPoints.reduce((acc, ele) => acc+ele, 0)
    let ans = 0
    let sum = 0

    for(let i=0; i<cardPoints.length-k; i++){
        sum += cardPoints[i]
    }

    ans = maxPoints-sum
    // let left = 0;
    for(let i=cardPoints.length-k; i<cardPoints.length; i++){
        sum += cardPoints[i]
        sum -= cardPoints[i-(cardPoints.length-k)]
        ans = Math.max(ans, maxPoints-sum)
    }

    return ans
};
