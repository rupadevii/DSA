/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let max = -1;
    let secondMax = -1;
    for(let i of s){
        let num = Number(i)
        if(!Number.isNaN(num)){
            if(num>max){
                secondMax = max;
                max = num;
            }
            else if(num>secondMax && num!== max){
                secondMax = num;
            }
        }
    }
    return secondMax;
};
