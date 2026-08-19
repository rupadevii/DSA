/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    let map = new Map()
    let res = 2*n

    for(let [row, seat] of reservedSeats){
        if(!map.has(row)){
            map.set(row, new Set())
        }
        
        map.get(row).add(seat)
    }

    for(let [key, value] of map){
        let left = true;
        for(let i=2; i<6; i++){
            if(value.has(i)){
                left = false
                break
            }
        }
        let middle = true;
        for(let i=4; i<8; i++){
            if(value.has(i)){
                middle = false
                break
            }
        }
        let right = true;
        for(let i=6; i<10; i++){
            if(value.has(i)){
                right = false
                break
            }
        }
        if(left && right){
            res -= 0
        }
        else if(left || right || middle){
            res -= 1
        }
        else{
            res -= 2
        }
    }

    return res
};
