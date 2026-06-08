/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {

    let smaller = []

    let larger = []

    let count=0
    for(let i of nums){
        if(i<pivot){
            smaller.push(i)
        }else if(i===pivot){
            count++
        }else{
            larger.push(i)
        }
    }

    let equal = []

    for(let i=1; i<=count; i++){
        equal.push(pivot)
    }
    let res = [...smaller, ...equal, ...larger]

    return res

    

    
};
