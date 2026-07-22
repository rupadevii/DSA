/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
    let s1 = num1.slice(0, -1).split("+")
    let s2 = num2.slice(0, -1).split("+")

    let n1 = s1[0], i1 = s1[1]
    let n2 = s2[0], i2 = s2[1]

    let p1 = (n1*n2)-(i1*i2)
    let p2 = (n2*Number(i1))+(n1*Number(i2))
    // console.log(Number(i1), Number(i2))

    return `${p1}+${p2}i`
};
