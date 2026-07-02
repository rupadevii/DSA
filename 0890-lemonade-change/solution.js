/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let count5 = 0
    let count10 = 0

    for(let i=0; i<bills.length; i++){
        let curr = bills[i]

        if(curr===5){
            count5++
        }

        else if(curr===10){
            count10++

            if(count5===0) return false
            count5--
        }

        else{
            if(count5===0) return false

            if(count10>0){
                count10--
                count5--
            }else if(count5<3) return false
            else count5-=3
        }
    }

    return true
};
