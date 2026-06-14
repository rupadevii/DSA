/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    // let map = new Map()
    // let value = 25

    // for(let i=97; i<123; i++){
    //     map.set(value, String.fromCharCode(i))
    //     value--
    // }
    // console.log(map)

    let res = []

    for(let i=0; i<words.length; i++){
        let word = words[i]
        let sum = 0


        for(let j=0; j<word.length; j++){
            // console.log(word.charCodeAt(j))
            sum += weights[word.charCodeAt(j)-97]
        }

        res.push(String.fromCharCode('z'.charCodeAt(0)-sum%26))
        
    }

    return res.join("")
};
