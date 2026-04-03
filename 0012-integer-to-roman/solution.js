/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let obj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    }

    let str = ""
    num = String(num)
    for(let i=0; i<num.length; i++){
        let temp = num[i] * Math.pow(10, num.length-i-1)
        
        while(temp!=0){
            let max = 0;
            let maxValue = "I"
            for(let i in obj){
                if(obj[i]>max && obj[i]<=temp){
                    max = obj[i]
                    maxValue = i
                }
            }

            str += maxValue
            temp -= max
            console.log("temp", temp)

        }

    }

    return str
};
