/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let first = num1.length-1
    let second = num2.length-1
    let ans = []

    let carry = 0;
    while(first>=0 || second>=0){
        let num = String(Number(carry)+(Number(num1[first--])||0)+(Number(num2[second--])||0))
        if(num.length===1){
            carry = 0;
            ans.push(num)
        }else{
            ans.push(num[1])
            carry = num[0]
        }
    }
    if(carry!==0){
        ans.push(carry)
    }

    return ans.reverse().join("")
};
