/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let set = new Set()

    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            let val = board[i][j]
            if(val===".") continue

            let row = `row-${i}-${val}`
            let col = `col-${j}-${val}`
            let box = `box-${Math.floor(i/3)}-${Math.floor(j/3)}-${val}`
            // console.log(row, col, box)

            if(set.has(row) || set.has(col) || set.has(box)){
                // console.log("found", row, col, box)
                return false
            }

            set.add(row)
            set.add(col)
            set.add(box)
        }
    }

    return true
};
