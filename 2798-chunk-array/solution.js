/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let nums = []
    let i =0;
    while(i<arr.length){
        let a = []
        let j=i;
        // while(j-i<size){
        //     if(arr[j] || arr[j]===0){
        //         a.push(arr[j])
        //     }
        //     j++
        // }

        nums.push(arr.slice(i, i+size))
        i += size
    }
    return nums;
};

