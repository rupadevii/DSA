/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */


var gameOfLife = function(board) {
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            // console.log(board[i][j], check(i, j))
            if(board[i][j] === 1 && check(i, j)<2) board[i][j] = 3
            // else if(board[i][j]===1 && (check(i, j)===2||check(i, j)===3))
            else if(board[i][j]===1 && check(i, j)>3) board[i][j] = 3
            else if(board[i][j]===0 && check(i, j)===3) board[i][j] = 2
        }
    }

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(board[i][j]===2) board[i][j] = 1
            if(board[i][j]===3) board[i][j] = 0
        }
    }

    function check(row, col){
        let count = 0
        const indices = [
            [0, 1], [1, 0], [1, 1], [0, -1], [-1, 0], [-1, -1], [-1, 1], [1, -1]
        ]

        for(let [x, y] of indices){
            if(row+x>=0 && row+x<board.length && col+y>=0 && col+y<board[0].length){
                if(board[row+x][col+y]===3 || board[row+x][col+y]===1) count++
            }
        }
        // if(board[row-1]){
        //     if(board[row-1][col]===3 || board[row-1][col]===1) count++
        // }
        // if(board[row][col-1]){
        //     if(board[row][col-1]===3 || board[row][col-1]===1) count++
        // }

        // if(board[row-1] && board[row-1][col-1]){
        //     if(board[row-1][col-1]===3 || board[row-1][col-1]===1) count++
        // }

        // if(board[row][col+1]){
        //     if(board[row][col+1]===3 || board[row][col+1]===1) count++
        // }
        // if(board[row+1]){
        //     if(board[row+1][col]===3 || board[row+1][col]===1) count++

        // }

        // if(board[row+1] && board[row+1][col+1]){
        //     if(board[row+1][col+1]===3 || board[row+1][col+1]===1) count++
        // }

        // if(board[row+1] && board[row+1][col-1]){
        //     if(board[row+1][col-1]===3 || board[row+1][col-1]===1) count++
        // }

        // if(board[row-1] && board[row-1][col+1]){
        //     if(board[row-1][col+1]===3 || board[row-1][col+1]===1) count++
        // }

        return count
    }
    
};
