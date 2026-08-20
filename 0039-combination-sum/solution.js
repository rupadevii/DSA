/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = []
    let arr = []

    function createArray(i, num){
        if(num===0){
            res.push([...arr])
            return
        }

        if (i === candidates.length || num < 0) {
            return;
        } 

        arr.push(candidates[i])
        createArray(i, num-candidates[i])

        arr.pop()
        createArray(i+1, num)
    }

    createArray(0, target)

    return res
};
