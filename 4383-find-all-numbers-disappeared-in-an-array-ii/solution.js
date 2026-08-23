/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findDisappearedNumbers = function(nums, lower, upper) {
    let res = []

    let i=lower
    let set = new Set(nums)

    while(i<=upper){
        let arr = []
        if(!set.has(i)) arr.push(i)
        while(!set.has(i) && i<=upper){
            i++  
        } 
        if(arr.length>0){
            arr.push(i-1)
            res.push(arr)
        }
        i++
    }

    return res
};
