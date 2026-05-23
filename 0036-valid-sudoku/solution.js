/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i=0; i<9; i++){
        let set = new Set()
        for(let j=0; j<9; j++){
            if(board[i][j]!=="." && set.has(board[i][j])) return false
            else if(board[i][j]!==".") set.add(board[i][j])
        }

        let set2 = new Set()
        for(let j=0; j<9; j++){
            if(board[j][i]!=="." && set2.has(board[j][i])) return false
            else if(board[j][i]!==".") set2.add(board[j][i])
        }
        
    }

    for(let k=0; k<=8; k+=3){
        for(let i=0; i<=8; i+=3){
            let set = new Set()
            for(let l=0; l<=2; l++){
                for(let j=0; j<=2; j++){
                    if(board[l+k][j+i]!=="." && set.has(board[l+k][j+i])) return false
                    else if(board[l+k][j+i]!==".") set.add(board[l+k][j+i])
                }

            }
        }
    }


    

    return true;
};

