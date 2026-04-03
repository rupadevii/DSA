/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
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

    let num = 0;
    let i=s.length-1
    while(i>=0){
        if(i>0){
            let ch = s[i-1]+s[i]
            // console.log(ch, obj[ch], num)
            if(obj[ch]){
                num += obj[ch]
                i-=2;
                continue
            }
        }
        num += obj[s[i]]
        i--
    
    }

    return num
    
};
