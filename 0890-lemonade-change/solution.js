/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let count5 = 0;
    let count10 = 0;
    for(let i=0; i<bills.length; i++){
        if(bills[i]===5){
            count5++
        }
        else if(bills[i]===10){
            if(count5<1) return false
            count10++
            count5--
        }
        else{
            if(count5>0 && count10>0){
                count5--
                count10--
            }
            else if(count5>2){
                count5 -= 3
            }
            else return false
        }
    }
    return true
};
