/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let m = grid.length
    let n = grid[0].length
    let arr = grid.flat()

    function reverse(left, right){
        while(left<=right){
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }

    k = k%arr.length

    reverse(0, arr.length-1)
    reverse(0, k-1)
    reverse(k, arr.length-1)

    let index = 0
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            grid[i][j] = arr[index++]
        }
    }

    return grid
};
