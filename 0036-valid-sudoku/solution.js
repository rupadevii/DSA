/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let set = new Set()

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){
            if(board[i][j]===".") continue
            let row = `row-${i}-${board[i][j]}`
            let col = `col-${j}-${board[i][j]}`

            let box = `box-${Math.floor(i/3)}-${Math.floor(j/3)}-${board[i][j]}`

            if(set.has(row) || set.has(col) || set.has(box)) return false

            set.add(row)
            set.add(col)
            set.add(box)
        }
    }

    return true
};
